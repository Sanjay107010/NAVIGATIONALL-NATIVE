import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import NotificationsScreen from '../screen/NotificationsScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SettingsScreen from '../screen/SettingsScreen';
import BottomNavigation from './BottomNavigation';
import MyTask from '../screen/MyTask';
import ListDisplay from '../screen/ListDisplay';
import MyTaskRedioButton from '../screen/MyTaskRedioButton';
import NewScreen from '../screen/NewScreen';
import PhNumberDemo from '../screen/PhNumberDemo';

const Stack = createStackNavigator();

type Props = {};

const StackNavigation = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Mytask" component={MyTask} />
      <Stack.Screen name="List" component={ListDisplay} />
      <Stack.Screen name="MytaskRedio" component={MyTaskRedioButton} />
      <Stack.Screen name="NewScree" component={NewScreen} />
      <Stack.Screen name="PhNumberDemo" component={PhNumberDemo} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
