import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, ImageUrl} from '../constant';
import HomeScreen from '../Screens/TabScreens/HomeScreens/HomeScreen';
import EventScreen from '../Screens/TabScreens/EventScreen/EventScreen';
import LikesScreen from '../Screens/TabScreens/LikesScreen/LikesScreen';
import ChatScreen from '../Screens/TabScreens/ChatScreen/ChatScreen';
import ProfileScreen from '../Screens/TabScreens/ProfileScreen/ProfileScreen';
import Home from '../Screens/TabScreens/HomeScreens/Home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={TAB_ROUTES.HomeScreen}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}
      >
         {/* <Tab.Screen
        name={TAB_ROUTES.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              activeIcon={ImageUrl.ActiveHome}
              icon={ImageUrl.HomeIcon}
            />
          ),
        }}
      /> */}

      <Tab.Screen
        name={TAB_ROUTES.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              activeIcon={ImageUrl.ActiveHome}
              icon={ImageUrl.HomeIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.EventScreen}
        component={EventScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              activeIcon={ImageUrl.Activeeventicon}
              icon={ImageUrl.EventIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.LikesScreen}
        component={LikesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              activeIcon={ImageUrl.Activeliketab}
              icon={ImageUrl.LikesTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.ChatScreen}
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              activeIcon={ImageUrl.Activechattab}
              icon={ImageUrl.ChatIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              activeIcon={ImageUrl.activeprofile}
              icon={ImageUrl.ProfileIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabIcon = ({focused, icon, activeIcon}: any) => {
  return (
    <View
      style={[
        styles.iconContainer,
        {backgroundColor: focused ? Colors.dark_yellow : ''},
      ]}>
      <Image
        source={focused ? activeIcon : icon}
        resizeMode="contain"
        style={[styles.tabIcon]}
      />
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 64,
    borderRadius: 30,
    position: 'absolute',
    bottom: 25,
    marginHorizontal: '7.5%',
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 2,
    borderColor: '#555555', // More visible border
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden', // Ensures border is visible
    elevation: 5, // Uncomment if needed for Android shadow
    width: '85%',
    borderTopWidth: 2,
  },
  tabIcon: {
    width: 23,
    height: 23,
  },
  iconContainer: {
    alignItems: 'center',
    height: 40,
    width: 40,
    justifyContent: 'center',
    borderRadius: 30,
  },
  activeIndicator: {
    width: 6,
    height: 6,
    backgroundColor: Colors.dark_yellow,
    borderRadius: 3,
    marginTop: 4,
  },
});

export const TAB_ROUTES = {
  HomeScreen: 'HomeScreen',
  EventScreen: 'EventScreen',
  LikesScreen: 'LikesScreen',
  ChatScreen: 'ChatScreen',
  ProfileScreen: 'ProfileScreen',
  Home: "Home",
};
