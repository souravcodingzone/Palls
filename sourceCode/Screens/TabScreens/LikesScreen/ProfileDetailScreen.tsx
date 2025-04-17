import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from '../../../utils/responsive';
import {Colors, FontsFamilys, FontSize, ImageUrl} from '../../../constant';
import { useNavigation } from '@react-navigation/native';

const interests = [
  'Hiking',
  'Table Tennis',
  'Photography',
  'Archery',
  'Reading',
];

const ProfileDetailScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.profileImageWrapper}>
          <ImageBackground
            source={ImageUrl.User1}
            style={styles.profileImage}
            imageStyle={styles.imageRadius}>
            <View style={styles.overlay} />

            {/* Top Icons */}
            <View style={styles.topRow}>
              <TouchableOpacity style={styles.roundBtn} onPress={() => navigation.goBack()}>
                <Image source={ImageUrl.BackIcon} style={styles.topIcon} />
              </TouchableOpacity>
              <View style={styles.distanceBadge}>
                <Image source={ImageUrl.DistanceIcon} style={styles.locIcon} />
                <Text style={styles.distanceText}>2.5 km</Text>
              </View>
            </View>

            {/* Name and Location */}
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Atylia, 32</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={ImageUrl.LocationIcon} style={styles.locIcon} />
                <Text style={styles.location}> Klang, Selangor</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <Text style={styles.subText}>
            Just moved back to Klang Valley after living at Penang for 10+
            years.
          </Text>

          <Text style={[styles.sectionTitle, {marginTop: verticalScale(20)}]}>
            Interests
          </Text>
          <View style={styles.interestWrapper}>
            {interests.map((item, index) => (
              <View key={index} style={styles.interestPill}>
                {item === 'Hiking' && (
                  <Image source={ImageUrl.Hike} style={styles.interestIcon} />
                )}
                {item === 'Archery' && (
                  <Image
                    source={ImageUrl.Archery}
                    style={styles.interestIcon}
                  />
                )}
                {item === 'Table Tennis' && (
                  <Image
                    source={ImageUrl.Archery}
                    style={styles.interestIcon}
                  />
                )}
                {item === 'Photography' && (
                  <Image
                    source={ImageUrl.Archery}
                    style={styles.interestIcon}
                  />
                )}
                {item === 'Reading' && (
                  <Image
                    source={ImageUrl.Archery}
                    style={styles.interestIcon}
                  />
                )}
                <Text style={styles.pillText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Buttons */}
      <LinearGradient
        colors={['#fff0', '#FEB413']}
        style={styles.bottomActionBar}>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.circleBtn}>
            <Image source={ImageUrl.WhiteCross} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.circleBtn, styles.starBtn]}>
            <Image source={ImageUrl.DarkYellowStar} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.circleBtn, styles.heartBtn]}>
            <Image source={ImageUrl.PinkHeart} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileImageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: Dimensions.get('window').width,
    height: verticalScale(400),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  topRow: {
    position: 'absolute',
    top: verticalScale(20),
    left: moderateScale(16),
    right: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
  },
  roundBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: Colors.white_dark,
    padding: moderateScale(8),
    borderRadius: moderateScale(50),
    borderWidth: 1,
  },
  topIcon: {
    width: scale(20),
    height: scale(20),
    tintColor: '#fff',
  },
  distanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.30)',
    borderColor: Colors.white_dark,
  },
  locIcon: {
    width: scale(10),
    height: scale(10),
    tintColor: '#fff',
    marginRight: scale(4),
    alignSelf: 'center',
  },
  distanceText: {
    color: '#fff',
    fontSize: moderateScale(10),
  },
  nameContainer: {
    position: 'absolute',
    bottom: verticalScale(20),
    alignSelf: 'center',
  },
  name: {
    color: '#fff',
    fontSize: FontSize.t_eight,
    fontFamily: FontsFamilys.Poppins_Bold,
    alignSelf: 'center',
  },
  location: {
    color: '#EAEAEA',
    fontSize: FontSize.fourteen,
    marginTop: verticalScale(2),
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  contentContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#2C2C2C',
    marginBottom: verticalScale(6),
  },
  subText: {
    fontSize: moderateScale(12),
    color: '#A3A3A3',
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  interestWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(10),
    marginBottom: verticalScale(30),
  },
  interestPill: {
    backgroundColor: '#FEB413',
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(3),
    borderRadius: moderateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
  },
  interestIcon: {
    width: scale(14),
    height: scale(14),
    tintColor: '#fff',
  },
  pillText: {
    fontSize: moderateScale(12),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#fff',
  },
  bottomActionBar: {
    padding: moderateScale(16),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    marginBottom: verticalScale(10),
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: moderateScale(40),
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: Colors.white_dark,
    width: '60%',
    alignSelf: 'center',
    paddingVertical: verticalScale(4),
  },
  circleBtn: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(30),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2C2C2C10',
    
  },
  starBtn: {
    backgroundColor: '#FEB413',
  },
  heartBtn: {
    backgroundColor: '#FF2D87',
  },
  actionIcon: {
    fontSize: moderateScale(22),
  },
  imageRadius: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    resizeMode: 'cover',
  },
});
