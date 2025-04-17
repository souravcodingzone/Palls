import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PackageList from '../Screens/DrawerScreens/PackageList/PackageList';
import Setting from '../Screens/DrawerScreens/Setting/Setting';
import TabNavigation from './TabNavigation';
import {Colors} from '../constant';
import Profile from '../Screens/DrawerScreens/Profile/Profile';
// import AboutPalls from '../Screens/DrawerScreens/AboutPalls/AboutPalls';
import HelpSupport from '../Screens/DrawerScreens/HelpSupport/HelpSupport';
import PrivacyScreen from '../Screens/TabScreens/ProfileScreen/PrivacyScreen';
import Logout from '../Screens/DrawerScreens/LogoutScreen/Logout';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: Colors.white,
          },
          drawerLabelStyle: {
            color: Colors.Black,
          },
        }}>
        <Drawer.Screen
          name="Main"
          component={TabNavigation}
          options={{
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen
          name="PackageList"
          component={PackageList}
          options={{
            drawerLabel: 'Package List',
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerLabel: 'Settings',
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: 'Profile',
          }}
        />
        <Drawer.Screen
          name="PrivacyScreen"
          component={PrivacyScreen}
          options={{
            drawerLabel: 'Privacy',
          }}
        />
        <Drawer.Screen
          name="HelpSupport"
          component={HelpSupport}
          options={{
            drawerLabel: 'Help & Support',
          }}
        />
        <Drawer.Screen
          name="LogoutScreen"
          component={Logout}
          options={{
            drawerLabel: 'Logout',
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});

export const Drawer_ROUTES = {
  PackageList: 'PackageList',
  Setting: 'Setting',
  Profile: 'Profile',
  AboutPalls: 'About Palls',
  PrivacyScreen: 'Privacy',
  HelpSupport: 'Help & Support',
  LogoutScreen: 'Logout',
};
