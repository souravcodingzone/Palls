import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, FontSize, FontsFamilys, ImageUrl, Texts} from '../../constant';
import OpacityButton from '../../components/OpacityButton';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../navigation/StackNavigation';
import { moderateScale } from '../../utils/responsive';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#FEB413', '#F9F9F9']}
      locations={[0, 0.8]}
      style={styles.container}>
      <StatusBar backgroundColor={Colors.dark_yellow} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <Image
          source={ImageUrl.PallsSignupLogo}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.heading}>{Texts.Create_account_now}</Text>

        <Text style={styles.signupText}>
          {Texts.By_creating}{' '}
          <Text style={styles.signupLink}>{Texts.Terms}</Text>. {Texts.Learn}
        </Text>
        <Text style={[styles.signupText, {marginTop: 0}]}>
          {Texts.how_process_your_our}{' '}
          <Text style={styles.signupLink}>{Texts.Privacy_Policy}</Text>.{' '}
          {Texts.and}
        </Text>
        <Text style={[styles.signupLink, {marginBottom: 5}]}>
          {Texts.Cookie_Policy}
        </Text>

        {/* Signup Buttons */}
        <OpacityButton
          name={Texts.Sign_up_with_phone_number}
          img1={ImageUrl.CallIcon}
        />
        <OpacityButton
          name={Texts.Sign_up_with_Google}
          img1={ImageUrl.GoogleIcon}
          button={styles.googlebuttonstyle}
        />

        {/* Already have an account? Sign In */}
        <Text style={styles.signupText}>
          {Texts.Dont_have_account}{' '}
          <Text
            style={styles.signupLink}
            onPress={() =>
              navigation.navigate(ROUTE_NAMES?.SignIn || 'SignIn')
            }>
            {Texts.Sign_In}
          </Text>
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    // height: '100%',
    width: '98%',
    // borderWidth:1
  },
  heading: {
    fontSize: FontSize.T_four,
    textAlign: 'center',
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: Colors.Main_Black,
    marginTop: 10,
  },
  signupText: {
    marginTop: 20,
    fontSize: FontSize.twelve,
    fontFamily: FontsFamilys.Poppins_Medium,
    color: 'rgba(34, 23, 42, 0.7)',
    textAlign: 'center',
    width:'90%',
  },
  signupLink: {
    color: Colors.dark_yellow,
    fontFamily: FontsFamilys.Poppins_Bold,
  },
  googlebuttonstyle: {
    backgroundColor: 'rgb(247, 234, 199)',
    borderColor: 'rgba(60, 57, 58, 0.7)',
  },
});
