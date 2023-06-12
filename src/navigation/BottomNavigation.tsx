import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import SettingsScreen from '../screen/SettingsScreen';
import Icons from 'react-native-vector-icons/AntDesign';
import ProfileScreen from '../screen/ProfileScreen';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        // headerShown: true,
      }}>
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({}) => {
            return <Icons name="home" size={30}></Icons>;
          },
        }}
      />
      {/* <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({}) => {
            return <Icons name="home" size={30}></Icons>;
          },
        }}
      /> */}
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({}) => {
            return <Icons name="profile" size={30}></Icons>;
          },
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({}) => {
            return <Icons name="setting" size={30}></Icons>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
