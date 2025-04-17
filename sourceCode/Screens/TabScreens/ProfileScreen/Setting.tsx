import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from '../../../utils/responsive';
import Header from '../../../components/Header';
import {FontsFamilys, ImageUrl} from '../../../constant';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../../navigation/StackNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  Subscription: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Setting = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleOptionPress = (option: string) => {
    if (option === 'Subscription Management') {
      navigation.navigate('Subscription');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Gradient Header */}
      <LinearGradient
        colors={['#FEB413', '#FEB413']}
        style={styles.headerGradient}>
       <Header
          leftIcon={ImageUrl.BackIcon}
          centerText="Setting"
          containerstyle={styles.headerStyle}
          centerTextStyle={styles.centerTextStyle}
          onPressLeftImg={() => navigation.goBack()}
        />
      </LinearGradient>

      {/* White Rounded Content Container */}
      <View style={styles.roundedContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.description}>Matching Preferences</Text>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Palls Buddy</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>General</Text>

          {['Account', 'Notification', 'Subscription Management'].map(
            (item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.option}
                onPress={() => handleOptionPress(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEB413',
  },
  header: {
    height: verticalScale(100),
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(20),
    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),
  },
  backButton: {
    position: 'absolute',
    top: verticalScale(20),
    left: scale(20),
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(16),
    color: '#000',
    alignSelf: 'center',
    marginBottom: verticalScale(4),
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  scrollContent: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
  },
  description: {
    fontSize: moderateScale(13),
    textAlign: 'center',
    color: '#444',
    marginBottom: verticalScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(14),
    color: '#333',
    marginVertical: verticalScale(25),
    textAlign: 'center',
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  option: {
    backgroundColor: '#F5F5F5',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderRadius: scale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(18),
  },
  optionText: {
    fontSize: moderateScale(14),
    color: '#111',
  },
  bottomNav: {
    position: 'absolute',
    bottom: verticalScale(20),
    left: scale(20),
    right: scale(20),
    backgroundColor: '#fff',
    borderRadius: scale(30),
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(10),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  activeIcon: {
    backgroundColor: '#FFB100',
    borderRadius: scale(20),
    padding: scale(6),
  },
  headerStyle: {
    marginVertical: moderateScale(18),
    marginLeft: moderateScale(2),
    alignItems: 'center',
  },
  centerTextStyle: {
    marginRight: moderateScale(50),
  },
  headerGradient: {
    height: verticalScale(100),
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  roundedContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: -verticalScale(10), // slight overlap to connect header and body
    paddingTop: verticalScale(20),
  },
});
