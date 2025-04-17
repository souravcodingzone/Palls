import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/responsive';
import {
  Colors,
  FontsFamilys,
  FontSize,
  ImageUrl,
  Texts,
} from '../../../constant';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as Progress from 'react-native-progress';
import {ROUTE_NAMES} from '../../../navigation/StackNavigation';
// import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  EditScreen: undefined;
  HobbyScreen: {isEditMode: boolean};
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const EditProfile = () => {
  const navigation = useNavigation<NavigationProp>();
  const renderPhotoBox = (key: number, isLarge = false) => (
    <TouchableOpacity
      key={key}
      style={[styles.photoBox, isLarge && styles.largeBox]}>
      <Image source={ImageUrl.PlusIcon} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}

        <LinearGradient
          colors={['#FFB100', '#fee8b8']}
          style={[styles.gradientContainer, {flex: 0.4}]}>
          {/* Header */}
          <Header
            leftIcon={ImageUrl.BackIcon}
            leftIconStyle={{
              width: moderateScale(45),
              height: moderateScale(45),
            }}
            onPressLeftImg={() => navigation.goBack()}
            containerstyle={{
              marginTop: moderateScale(8),
              alignItems: 'center',
            }}
            CenterImage={ImageUrl.PallsIcon}
            centerImageStyle={{
              marginLeft: moderateScale(-30),
            }}
          />

          <Progress.Circle
            progress={0.4}
            size={moderateScale(80)}
            color={Colors.dark_yellow}
            borderWidth={0}
            thickness={moderateScale(4)}
            strokeCap="round"
            unfilledColor="#F0F0F0"
            style={[styles.progressCircle, {transform: [{rotate: '-200deg'}]}]}
          />
          <Image source={ImageUrl.GirlImage} style={styles.profileImage} />
          <View style={styles.progressBadge}>
            <Text style={styles.progressText}>40%</Text>
          </View>

          {/* User Info */}
          <Text style={styles.userName}>Azrul, 31</Text>
          <View style={styles.locationRow}>
            <Image
              source={ImageUrl.LocationIcon}
              tintColor={'#777'}
              style={{height: 16, width: 16}}
            />
            <Text style={styles.locationText}>Klang, Selangor</Text>
          </View>
        </LinearGradient>

        <View style={styles.Enter_Number_View}>
          <Text style={styles.Enter_Number}>Photos & Videos</Text>
        </View>

        <View style={styles.photoGrid}>
          <View style={styles.leftColumn}>
            {renderPhotoBox(0, true)}
            <View style={styles.bottomRow}>
              {renderPhotoBox(1)}
              {renderPhotoBox(2)}
            </View>
          </View>
          <View style={styles.rightColumn}>
            {renderPhotoBox(3)}
            {renderPhotoBox(4)}
            {renderPhotoBox(5)}
          </View>
        </View>

        {/* Interests */}
        <View
          style={[
            styles.section,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: moderateScale(10),
            },
          ]}>
          <Text style={styles.sectionTitle}>Interests</Text>
        </View>
        <View style={styles.interestsContainer}>
          {['Coffee', 'Brunch', 'Pickleball'].map((interest, index) => (
            <View key={index} style={styles.interestTag}>
              <Text style={styles.interestText}>{interest}</Text>
              <Image source={ImageUrl.Cross} />
            </View>
          ))}
          <TouchableOpacity
            style={{alignSelf: 'center', marginLeft: moderateScale(40)}}
            onPress={() =>
              navigation.navigate('HobbyScreen', {isEditMode: true})
            }>
            <Image source={ImageUrl.RightArrow} tintColor={'#9A9A9A'} />
          </TouchableOpacity>
        </View>

        {/* Relationship Goals */}
        <View style={styles.section}>
          <View style={{marginHorizontal: moderateScale(10)}}>
            <Text style={styles.sectionTitle}>Relationship Goals</Text>
          </View>
          <TouchableOpacity
            style={{
              marginHorizontal: moderateScale(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.sectionSubText}>Long-term partner</Text>
            <Image source={ImageUrl.RightArrow} tintColor={'#9A9A9A'} />
          </TouchableOpacity>
        </View>

        {/* Bio */}
        <View style={styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: moderateScale(10),
            }}>
            <Text style={styles.sectionTitle}>Bio</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Privacy', {isEditMode: true})
              }></TouchableOpacity>
          </View>
          <TextInput
            placeholder="Start here"
            style={styles.bioInput}
            multiline
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  scrollContent: {
    paddingBottom: verticalScale(40),
  },
  gradientContainer: {
    paddingTop: verticalScale(30),
    paddingHorizontal: scale(16),
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    position: 'relative',
  },
  settingsBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: scale(10),
    zIndex: 1,
  },
  editBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: scale(10),
    zIndex: 1,
  },
  imageWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(50),
    alignSelf: 'center',
  },
  progress: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFB703',
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(2),
  },
  progressText: {
    fontSize: moderateScale(12),
    color: '#fff',
    fontFamily: FontsFamilys.Poppins_Bold,
    alignSelf: 'center',
    marginTop: verticalScale(2),
  },
  userName: {
    alignSelf: 'center',
    marginTop: verticalScale(12),
    fontSize: moderateScale(16),
    fontFamily: FontsFamilys.Poppins_Bold,
    color: '#000',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: verticalScale(14),
  },
  locationText: {
    marginLeft: scale(6),
    fontSize: moderateScale(13),
    color: '#777',
  },
  Enter_Number_View: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(12),
    marginLeft: moderateScale(5),
  },
  Enter_Number: {
    fontSize: FontSize.thirteen,
    fontFamily: FontsFamilys.Poppins_SemiBold,
    marginLeft: scale(20),
  },
  photoGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: moderateScale(12),
  },
  leftColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rightColumn: {
    flexDirection: 'column',
    gap: moderateScale(10),
  },

  largeBox: {
    height: scale(200),
    width: scale(200),
    backgroundColor: '#fff',
    borderRadius: scale(20),
    borderWidth: 2,
    borderColor: '#9A9A9A',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    overflow: 'hidden',
  },
  progressBadge: {
    position: 'relative',
    backgroundColor: Colors.dark_yellow,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(6),
    borderWidth: 2,
    borderColor: Colors.white,
    alignSelf: 'center',
    bottom: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: moderateScale(12),
    gap: moderateScale(8),
  },
  photoBox: {
    height: scale(95),
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#9A9A9A',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(12), // Increase if you want more rounded corners
    overflow: 'hidden',
    backgroundColor: '#fff', // ✅ White background
  },
  plusText: {
    fontSize: scale(24),
    color: '#9A9A9A',
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  section: {
    marginTop: verticalScale(20),
    paddingHorizontal: scale(16),
  },
  sectionTitle: {
    fontFamily: FontsFamilys.Poppins_SemiBold,
    fontSize: moderateScale(14),
    marginBottom: verticalScale(8),
  },
  sectionSubText: {
    fontSize: moderateScale(13),
    color: '#9A9A9A',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: scale(8),
    marginHorizontal: moderateScale(20),
  },
  interestTag: {
    backgroundColor: '#0D6E4F',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  interestText: {
    color: '#fff',
    fontSize: moderateScale(12),
  },
  bioInput: {
    borderWidth: 1,
    borderRadius: moderateScale(8),
    height: verticalScale(100),
    padding: scale(10),
    textAlignVertical: 'top',
    marginHorizontal: scale(10),
  },
  saveButton: {
    marginTop: verticalScale(30),
    backgroundColor: '#FFB703',
    borderRadius: moderateScale(30),
    marginHorizontal: scale(26),
    paddingVertical: verticalScale(12),
    alignItems: 'center',
    borderWidth: 2,
  },
  saveButtonText: {
    fontSize: moderateScale(16),
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  progressCircle: {
    position: 'absolute',
    top: 113,
    alignSelf: 'center',
  },
});
