import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../components/Header';
import {moderateScale, scale, verticalScale} from '../../../utils/responsive';
import {FontsFamilys, ImageUrl} from '../../../constant';
import {useRoute, RouteProp} from '@react-navigation/native';

type ProfileDetailsRouteParams = {
  profile: {
    id: string;
    name: string;
    image: any;
    match?: string;
    distance?: string;
    status?: string;
  };
};

type ProfileDetailsRouteProp = RouteProp<{ProfileDetailsScreen: ProfileDetailsRouteParams}, 'ProfileDetailsScreen'>;

const ProfileDetailsScreen = () => {
  const route = useRoute<ProfileDetailsRouteProp>();
  const {profile} = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#FEB413', '#F9F9F9']}
        locations={[0, 0.3]}
        style={styles.gradient}>
        <View style={styles.container}>
          <Header
            leftIcon={ImageUrl.BackIcon}
            leftIconStyle={{
              width: moderateScale(45),
              height: moderateScale(45),
            }}
            containerstyle={{
              marginTop: moderateScale(8),
              marginLeft: moderateScale(22),
              alignContent: 'center',
              alignItems: 'center',
            }}
            CenterImage={ImageUrl.PallsIcon}
            centerImageStyle={{
              marginLeft: moderateScale(10),
            }}
          />

          <ScrollView style={styles.scrollView}>
            <Image source={profile.image} style={styles.profileImage} />
            
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{profile.name}</Text>
              {profile.match && (
                <Text style={styles.matchText}>{profile.match}</Text>
              )}
              {profile.distance && (
                <Text style={styles.distanceText}>{profile.distance}</Text>
              )}
              {profile.status && (
                <Text style={styles.statusText}>{profile.status}</Text>
              )}
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <Image source={ImageUrl.Star} style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Image source={ImageUrl.ChatIcon} style={styles.actionIcon} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FEB413',
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  profileImage: {
    width: '100%',
    height: verticalScale(400),
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: moderateScale(16),
  },
  name: {
    fontSize: moderateScale(24),
    color: '#2C2C2C',
    marginBottom: verticalScale(8),
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  matchText: {
    fontSize: moderateScale(16),
    color: '#FDB515',
    marginBottom: verticalScale(4),
  },
  distanceText: {
    fontSize: moderateScale(14),
    color: '#666666',
    marginBottom: verticalScale(4),
  },
  statusText: {
    fontSize: moderateScale(14),
    color: '#666666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(24),
    paddingVertical: verticalScale(24),
  },
  actionButton: {
    backgroundColor: '#FDB515',
    borderRadius: moderateScale(30),
    padding: moderateScale(16),
  },
  actionIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: '#fff',
  },
}); 