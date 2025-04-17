import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {Colors, FontsFamilys, ImageUrl} from '../constant';
import {moderateScale, scale, verticalScale} from '../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

type DrawerParamList = {
  PackageList: undefined;
  Setting: undefined;
  Profile: undefined;
  AboutPalls: undefined;
  PrivacyScreen: undefined;
  HelpSupport: undefined;
  LogoutScreen: undefined;
};

type NavigationProp = DrawerNavigationProp<DrawerParamList>;

const CustomDrawerContent = () => {
  const navigation = useNavigation<NavigationProp>();

  const menuItems = [
    {label: 'Package List', route: 'Subscription'},
    {label: 'Settings', route: 'Setting'},
    {label: 'Profile', route: 'ProfileScreen'},
    {label: 'About Palls', route: 'AboutPalls'},
    {label: 'Privacy', route: 'Privacy'},
    {label: 'Help & Support', route: 'ContactUs'},
    {label: 'Logout', route: 'SignIn'},
  ];

  const handleMenuItemPress = (route: keyof DrawerParamList) => {
    navigation.navigate(route);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Progress.Circle
            progress={0.4}
            size={moderateScale(60)}
            color={Colors.dark_yellow}
            borderWidth={0}
            thickness={moderateScale(4)}
            strokeCap="round"
            unfilledColor="#F0F0F0"
            style={[styles.progressCircle, {transform: [{rotate: '-200deg'}]}]}
          />
          <View style={styles.imageContainer}>
            <Image source={ImageUrl.GirlImage} style={styles.profileImage} />
          </View>
          <View style={styles.progressBadge}>
            <Text style={styles.progressText}>40%</Text>
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Azrul, 31</Text>
          <Text style={styles.userEmail}>azrul@email.com</Text>
        </View>
      </View>

      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() =>
              handleMenuItemPress(item.route as keyof DrawerParamList)
            }>
            <Text style={styles.menuText}>{item.label}</Text>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrowText}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Palls</Text>
        <Text style={styles.version}>App Version 1.0</Text>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(16),
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  profileContainer: {
    position: 'relative',
    width: moderateScale(60),
    height: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircle: {
    position: 'absolute',
  },
  imageContainer: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  progressBadge: {
    position: 'absolute',
    bottom: -8,
    right: 8,
    backgroundColor: Colors.dark_yellow,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateScale(2),
    borderWidth: 2,
    borderColor: Colors.white,
  },
  progressText: {
    fontSize: moderateScale(10),
    fontFamily: FontsFamilys.Poppins_Medium,
    color: Colors.white,
  },
  userInfo: {
    marginLeft: scale(12),
    flex: 1,
  },
  userName: {
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: Colors.Black,
  },
  userEmail: {
    fontSize: moderateScale(12),
    color: 'gray',
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  menuContainer: {
    flex: 1,
    paddingTop: verticalScale(20),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: moderateScale(14),
    color: Colors.Black,
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  arrowContainer: {
    width: moderateScale(20),
    height: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: moderateScale(20),
    color: Colors.Black,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: scale(16),
  },
  footerLabel: {
    fontSize: moderateScale(12),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: Colors.Black,
  },
  version: {
    fontSize: moderateScale(10),
    color: 'gray',
    marginTop: verticalScale(4),
    fontFamily: FontsFamilys.Poppins_Regular,
  },
});
