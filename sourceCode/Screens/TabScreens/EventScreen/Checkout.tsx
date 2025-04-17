import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
import {moderateScale, verticalScale, scale} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {FontsFamilys, ImageUrl} from '../../../constant';
import Header from '../../../components/Header';

const Checkout = ({navigation}) => {
  //   const navigation = () => useNavigation();
  const handleCheckout = () => {
    // handle checkout logic
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#FEB413', '#FFFFFF']}
          locations={[0, 1]}
          style={styles.header}>
          <Header
            leftIcon={ImageUrl.BackIcon}
            centerText="Setting"
            containerstyle={styles.headerStyle}
            centerTextStyle={styles.centerTextStyle}
            onPressLeftImg={() => navigation.goBack()}
          />
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.mainText}>Hope you enjoyed the moment!</Text>
          <Text style={styles.subText}>
            Please click the checkout button to complete today’s activity.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}>
            <View style={styles.iconCircle}>
              <Image
                source={ImageUrl.RightArrow}
                style={{width: moderateScale(20), height: moderateScale(20)}}
              />
            </View>
            <Text style={styles.checkoutText}>Meeting ended</Text>
            {[1, 2, 3].map((_, index) => (
              <Image
                key={index}
                source={ImageUrl.RightArrow}
                style={{width: moderateScale(10), height: moderateScale(25)}}
              />
            ))}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingTop: verticalScale(20),
    paddingHorizontal: moderateScale(16),
    paddingBottom: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEB413',
  },
  backButton: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(18),
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#2C2C2C',
    marginRight: moderateScale(36),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(32),
  },
  mainText: {
    fontSize: moderateScale(16),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#2C2C2C',
    marginBottom: verticalScale(8),
  },
  subText: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: '#808080',
  },
  footer: {
    padding: moderateScale(20),
    bottom: verticalScale(20),
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
  headerStyle: {
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(2),
    alignItems: 'center',
  },
  centerTextStyle: {
    marginRight: moderateScale(50),
  },
});
