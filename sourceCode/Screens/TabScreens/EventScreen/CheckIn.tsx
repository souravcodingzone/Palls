import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {moderateScale, verticalScale} from '../../../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../components/Header';
import {Colors, FontsFamilys, FontSize, ImageUrl} from '../../../constant';
import {useNavigation} from '@react-navigation/native';
import OpacityButton from '../../../components/OpacityButton';
import {ROUTE_NAMES} from '../../../navigation/StackNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Checkout: undefined;
  [key: string]: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CheckIn = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Top Image Section */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={ImageUrl.Profile}
            style={styles.image}
            imageStyle={styles.imageStyle}>
            <View
              style={{
                marginHorizontal: moderateScale(15),
                marginTop: moderateScale(10),
              }}>
              <Header
                leftIcon={ImageUrl.BackIcon}
                onPressLeftImg={() => navigation.goBack()}
                centerText="Meeting"
                containerstyle={styles.headerStyle}
                centerTextStyle={styles.centerTextstyle}
                RightIcon={ImageUrl.Share}
              />
            </View>

            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.6)']}
              style={styles.gradient}
            />

            <View style={styles.textOverlay}>
              <Text style={styles.subText}>You are meeting</Text>
              <Text style={styles.nameText}>Atylia, 32</Text>
              <Text style={styles.label}>Basic Information</Text>
              <Text style={styles.infoText}>
                Just moved back to Klang Valley after living at Penang for 10+
                years.
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* Location Section */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>Meeting location:</Text>
          <View style={styles.pinCircle}>
            <Image source={ImageUrl.LocationIcon} style={styles.locationIcon} />
          </View>
          <Text style={styles.locationText}>
            Berjaya Times Square, Bukit Bintang
          </Text>
          <Text style={styles.warningText}>
            Before you proceed, please inform your family members of your
            whereabouts.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => navigation.navigate(ROUTE_NAMES.Checkout)}>
            <View style={styles.iconCircle}>
              <Image
                source={ImageUrl.RightArrow}
                style={{width: moderateScale(20), height: moderateScale(20)}}
              />
            </View>
            <Text style={styles.checkoutText}>Meet in person now</Text>
            {[1, 2, 3].map((_, index) => (
              <Image
                key={index}
                source={ImageUrl.RightArrow}
                style={{width: moderateScale(10), height: moderateScale(25)}}
              />
            ))}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingBottom: verticalScale(30),
  },
  imageContainer: {
    height: verticalScale(400),
    position: 'relative',
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  iconLeft: {
    position: 'absolute',
    top: verticalScale(20),
    left: moderateScale(20),
    backgroundColor: '#00000060',
    padding: moderateScale(10),
    borderRadius: 999,
    zIndex: 1,
  },
  iconRight: {
    position: 'absolute',
    top: verticalScale(20),
    right: moderateScale(20),
    backgroundColor: '#00000060',
    padding: moderateScale(10),
    borderRadius: 999,
    zIndex: 1,
  },
  textOverlay: {
    position: 'absolute',
    bottom: verticalScale(30),
    left: moderateScale(24),
    right: moderateScale(24),
  },
  meetingText: {
    color: '#fff',
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    textAlign: 'center',
    marginBottom: verticalScale(2),
  },
  subText: {
    color: '#fff',
    fontSize: moderateScale(12),
    textAlign: 'center',
  },
  nameText: {
    color: '#fff',
    fontSize: moderateScale(24),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    textAlign: 'center',
    marginVertical: verticalScale(4),
  },
  label: {
    color: '#fff',
    fontFamily: FontsFamilys.Poppins_SemiBold,
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: moderateScale(12),
    textAlign: 'center',
    marginTop: verticalScale(4),
    opacity: 0.6,
    width: '80%',
    alignSelf: 'center',
  },
  locationContainer: {
    paddingHorizontal: moderateScale(24),
    alignItems: 'center',
    marginTop: verticalScale(24),
  },
  locationLabel: {
    fontSize: moderateScale(12),
    color: '#6C6C6C',
    marginBottom: verticalScale(10),
  },
  pinCircle: {
    backgroundColor: '#D9F8E9',
    padding: moderateScale(12),
    borderRadius: 99,
    marginBottom: verticalScale(10),
  },
  locationText: {
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#2C2C2C',
    textAlign: 'center',
    marginBottom: verticalScale(6),
  },
  warningText: {
    fontSize: FontSize.fourteen,
    color: '#6C6C6C',
    textAlign: 'center',
    width: '90%',
  },
  button: {
    flexDirection: 'row',
    paddingVertical: verticalScale(14),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(30),
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  buttonArrow: {
    fontSize: moderateScale(14),
    color: '#fff',
    marginLeft: moderateScale(8),
  },
  locationIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
  },
  headerStyle: {
    marginVertical: moderateScale(18),
    marginLeft: moderateScale(2),
    alignItems: 'center',
    zIndex: 1,
  },
  centerTextstyle: {
    textAlign: 'center',
    color: Colors.white,
  },
  footer: {
    padding: moderateScale(20),
    bottom: verticalScale(20),
    marginTop: verticalScale(50),
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(30),
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(20),
    backgroundColor: '#fff',
  },
  iconCircle: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: '#FEB413',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(12),
  },
  checkoutText: {
    flex: 1,
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#2C2C2C',
    textAlign: 'center',
  },
  centerTextStyle: {
    marginRight: moderateScale(50),
  },
});
