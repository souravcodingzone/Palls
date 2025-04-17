import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../../components/CustomTextInput';
import {Colors, FontsFamilys, FontSize, Texts} from '../../constant';
import OpacityButton from '../../components/OpacityButton';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../navigation/StackNavigation';
import Header from '../../components/Header';
import {moderateScale} from '../../utils/responsive';
import CountryPicker from 'react-native-country-picker-modal';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number()
    .typeError('Age must be a number')
    .required('Age is required'),
  location: Yup.string().required('Location is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  contactNumber: Yup.string()
    .matches(/^\d+$/, 'Contact number must contain only digits')
    .min(10, 'Contact number must be at least 10 digits')
    .max(16, 'Contact number must not exceed 16 digits')
    .required('Contact number is required'),
});

interface FormValues {
  name: string;
  age: string;
  location: string;
  email: string;
  contactNumber: string;
}

const DetailsFill = () => {
  const navigation = useNavigation();
  const formikRef = useRef<FormikProps<FormValues>>(null);
  const [countryCode, setCountryCode] = useState('MY');
  const [country, setCountry] = useState(null);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <LinearGradient
        colors={['#FEB413', '#F9F9F9']}
        locations={[0, 0.85]}
        style={styles.container}>
        <StatusBar backgroundColor="#FEB413" />
        <View style={styles.mainContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{Texts.Fill_your_details}</Text>
            <Text style={styles.subtitle}>{Texts.Please_ensure_that}</Text>
            <Formik
              innerRef={formikRef}
              initialValues={{
                name: '',
                age: '',
                location: '',
                email: '',
                contactNumber: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                navigation.navigate(ROUTE_NAMES.Gender);
                console.log(values);
              }}>
              {({handleChange, handleBlur, values, errors, touched}) => (
                <View style={styles.formContainer}>
                  <View style={styles.inputsContainer}>
                    <CustomTextInput
                      placeholder={Texts.Name}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {touched.name && errors.name && (
                      <Text style={styles.errorText}>{errors.name}</Text>
                    )}

                    <CustomTextInput
                      placeholder={Texts.Age}
                      keyboardType="numeric"
                      onChangeText={handleChange('age')}
                      onBlur={handleBlur('age')}
                      value={values.age}
                      length={2}
                    />
                    {touched.age && errors.age && (
                      <Text style={styles.errorText}>{errors.age}</Text>
                    )}

                    <CustomTextInput
                      placeholder={Texts.Location}
                      onChangeText={handleChange('location')}
                      onBlur={handleBlur('location')}
                      value={values.location}
                    />
                    {touched.location && errors.location && (
                      <Text style={styles.errorText}>{errors.location}</Text>
                    )}

                    <CustomTextInput
                      placeholder={Texts.Email_Address}
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                    <View>
                      <View style={styles.inputWrapper}>
                        <CustomTextInput
                          placeholder={Texts.Phone_Number}
                          keyboardType="numeric"
                          onChangeText={handleChange('contactNumber')}
                          onBlur={handleBlur('contactNumber')}
                          value={values.contactNumber}
                          length={16}
                          leftComponent={
                            <>
                              <CountryPicker
                                withFlag
                                withCallingCode
                                withFilter
                                withCallingCodeButton
                                withCountryNameButton={false}
                                countryCode={countryCode}
                                onSelect={country => {
                                  setCountryCode(country.cca2);
                                  setCountry(country);
                                }}
                              />
                            </>
                          }
                        />
                      </View>
                      {touched.contactNumber && errors.contactNumber && (
                        <Text style={styles.errorText}>
                          {errors.contactNumber}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
          <View style={styles.bottomButtonContainer}>
            <OpacityButton
              button={{
                width: '85%',
                alignSelf: 'center',
              }}
              name={Texts.Continue}
              pressButton={() => {
                Keyboard.dismiss();
                formikRef.current?.handleSubmit();
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default DetailsFill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    marginTop: moderateScale(50),
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: moderateScale(20),
  },
  formContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.T_four,
    fontFamily: FontsFamilys.Poppins_Bold,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 40,
    color: Colors.Main_Black,
  },
  subtitle: {
    fontSize: FontSize.twelve,
    fontFamily: FontsFamilys.Poppins_Regular,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: 'rgba(34, 23, 42, 0.7)',
  },
  errorText: {
    color: 'red',
    fontSize: FontSize.twelve,
    marginBottom: moderateScale(5),
    marginLeft: moderateScale(12),
  },
  bottomButtonContainer: {
    paddingBottom: moderateScale(55),
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
