import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {moderateScale, verticalScale} from '../../utils/responsive';
import OpacityButton from '../../components/OpacityButton';
import {FontsFamilys, Texts} from '../../constant';
import {ROUTE_NAMES} from '../../navigation/StackNavigation';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PhotoFile} from 'react-native-vision-camera';

type ReviewPhotoScreenRouteProp = RouteProp<{
  ReviewPhotoScreen: {
    photo: PhotoFile | null;
  };
}, 'ReviewPhotoScreen'>;

type ReviewPhotoScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: ReviewPhotoScreenRouteProp;
};

const ReviewPhotoScreen: React.FC<ReviewPhotoScreenProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<ReviewPhotoScreenRouteProp>();
  const { photo } = route.params;

  const handleRetake = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    // TODO: Implement photo submission logic
    navigation.navigate(ROUTE_NAMES.DetailsFill);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Review and save your{'\n'}photo</Text>

      <View style={styles.imageBox}>
        {photo ? (
          <Image 
            source={{ uri: `file://${photo.path}` }} 
            style={styles.image} 
          />
        ) : (
          <View style={styles.placeholderImage} />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <OpacityButton 
          button={styles.retakeButton} 
          name={Texts.Retake} 
          pressButton={handleRetake}
        />

        <OpacityButton
          button={{
            marginVertical: moderateScale(22),
            width: '43%',
            paddingVertical: moderateScale(12),
          }}
          name={Texts.Submit}
          pressButton={handleSubmit}
        />
      </View>

      <Text style={styles.privacyText}>
        For more info on how we use, retain and protect your personal data,
        please read our {''}
        {
          <TouchableOpacity
            // onPress={() => navigation.navigate(ROUTE_NAMES.DetailsFill)}
            >
            <Text style={styles.linkText}>Privacy Policy.</Text>
          </TouchableOpacity>
        }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(24),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: '#2C2C2C',
    marginTop: verticalScale(40),
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  imageBox: {
    width: moderateScale(260),
    height: verticalScale(360),
    borderRadius: moderateScale(16),
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D9',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: moderateScale(20),
    justifyContent: 'space-between',
  },
  retakeButton: {
    marginVertical: 22,
    width: '43%',
    backgroundColor: '#F5F4FF',
  },
  privacyText: {
    fontSize: moderateScale(12),
    color: '#2C2C2C',
    textAlign: 'center',
    bottom: moderateScale(30),
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#2C2C2C',
    marginBottom: moderateScale(-8),
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
});

export default ReviewPhotoScreen;
