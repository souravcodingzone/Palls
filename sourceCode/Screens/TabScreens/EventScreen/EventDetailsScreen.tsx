import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {moderateScale, verticalScale} from '../../../utils/responsive';
import {Colors, FontsFamilys, ImageUrl, Texts} from '../../../constant';
import Header from '../../../components/Header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

// Define the type for the navigation prop
type RootStackParamList = {
  CheckIn: undefined;
  // Add other screens here as needed
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const EventDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={ImageUrl.Guitar}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <Header
            leftIcon={ImageUrl.BackIcon}
            onPressLeftImg={() => navigation.goBack()}
            containerstyle={{
              marginTop: moderateScale(28),
              alignItems: 'flex-start',
            }}
          />

          <View style={styles.kmBadge}>
            <Image source={ImageUrl.DistanceIcon} style={{}} />
            <Text style={styles.kmText}>2.5 km</Text>
          </View>
          <View style={styles.imageOverlay}>
            <Text style={styles.title}>Instrumental Musical 3.0</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: moderateScale(10),
              }}>
              <Image
                source={ImageUrl.LocationIcon}
                style={{height: 15, width: 15, tintColor: Colors.white}}
              />
              <Text style={styles.subtitle}>Petaling Jaya</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.detailContainer}>
          <Text style={styles.detailHeading}>Event Details</Text>
          <Text style={styles.detailText}>{Texts.Instrumental_Musical}</Text>

          <Text style={styles.datetimeText}>08:30PM | 26 FEB 2025</Text>

          <View style={styles.tags}>
            <Text style={styles.tag}>2.3k potential connections</Text>
            <Text style={styles.tag}>Petaling Jaya</Text>
          </View>

          <TouchableOpacity
            style={styles.rsvpButton}
            onPress={() => navigation.navigate('CheckIn' as never)}>
            <Text style={styles.rsvpText}>RSVP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height * 0.6,
    justifyContent: 'space-between',
    padding: moderateScale(16),
  },
  imageStyle: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  backButton: {
    marginTop: verticalScale(8),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kmBadge: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    position: 'absolute',
    marginVertical: verticalScale(40),
    marginHorizontal: moderateScale(16),
    borderWidth: 1,
    borderColor: Colors.white,
  },
  kmText: {
    color: '#fff',
    marginLeft: moderateScale(4),
    fontSize: moderateScale(12),
  },
  imageOverlay: {
    marginBottom: verticalScale(16),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(20),
    color: '#fff',
    fontFamily: FontsFamilys.Poppins_Bold,
  },
  subtitle: {
    fontSize: moderateScale(12),
    color: '#fff',
    marginTop: verticalScale(4),
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  detailContainer: {
    padding: moderateScale(20),
  },
  detailHeading: {
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#2C2C2C',
    marginBottom: verticalScale(8),
  },
  detailText: {
    fontSize: moderateScale(12),
    color: '#808080',
    lineHeight: verticalScale(18),
    marginBottom: verticalScale(16),
  },
  datetimeText: {
    fontSize: moderateScale(12),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#2C2C2C',
    marginBottom: verticalScale(16),
  },
  tags: {
    flexDirection: 'row',
    gap: moderateScale(10),
    marginBottom: verticalScale(24),
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#FDE49C',
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(12),
    fontSize: moderateScale(10),
    color: '#2C2C2C',
    fontFamily: FontsFamilys.Poppins_Regular,
    opacity: 0.6,
    borderWidth: 1,
    borderColor: Colors.dark_yellow,
  },
  rsvpButton: {
    backgroundColor: '#FDC93A',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  rsvpText: {
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
});
