import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale} from '../../utils/responsive';
import {FontsFamilys, FontSize, ImageUrl, Texts} from '../../constant';
import Header from '../../components/Header';
import OpacityButton from '../../components/OpacityButton';
import {ROUTE_NAMES} from '../../navigation/StackNavigation';

const BioScreen = () => {
  const navigation = useNavigation();
  const [bio, setBio] = useState('');

  const handleSubmit = () => {
    // handle form submit here
    navigation.navigate(ROUTE_NAMES.TabNavigation);
  };

  return (
    <LinearGradient
      colors={['#FEB413', '#F9F9F9']}
      locations={[0, 0.8]}
      style={styles.container}>
      <StatusBar backgroundColor="#FEB413" />

      <Header
        leftIcon={ImageUrl.BackIcon}
        onPressLeftImg={() => navigation.goBack()}
        containerstyle={{
          marginTop: moderateScale(48),
          alignItems: 'flex-start',
        }}
      />

      <KeyboardAvoidingView
        style={{flex: 1, width: '100%'}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Add something interesting about you</Text>
          <Text style={styles.subTitle}>
            Write interesting facts about yourself
          </Text>

          <TextInput
            style={styles.textArea}
            placeholder="Start here"
            placeholderTextColor="#B5B5B5"
            multiline
            value={bio}
            onChangeText={setBio}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottomButton}>
        <OpacityButton name="Save" pressButton={handleSubmit} />
      </View>
    </LinearGradient>
  );
};

export default BioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(100),
  },
  title: {
    fontSize: scale(20),
    textAlign: 'center',
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#000',
    width:'75%'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: FontSize.fourteen,
    fontFamily: FontsFamilys.Poppins_Medium,
    marginVertical: moderateScale(20),
    color: '#6E6E6E',
  },
  textArea: {
    width: '87%',
    height: moderateScale(140),
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    fontFamily: FontsFamilys.Poppins_Regular,
    fontSize: FontSize.fourteen,
    color: '#000',
  },
  bottomButton: {
    position: 'absolute',
    bottom: moderateScale(30),
    width: '85%',
    alignSelf: 'center',
    alignItems:'center'
  },
});
