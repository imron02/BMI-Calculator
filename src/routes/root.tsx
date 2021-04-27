import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeStackParamList, RootStackParamList} from './types';
import {ScreenName} from '../utils/constant';
import {Colors} from '../utils/colors_util';
import HomeScreen from '../features/home/screens/home_screen';
import HeaderComponent from '../components/header_component';
import ResultScreen from '../features/result/screens/result_screen';

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: Colors.dark},
      headerTintColor: Colors.white,
    }}>
    <Stack.Screen
      name={ScreenName.HomeScreen}
      component={HomeScreen}
      options={{
        header: () => <HeaderComponent />,
      }}
    />
    <Stack.Screen name={ScreenName.ResultScreen} component={ResultScreen} />
  </Stack.Navigator>
);

const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenName.HomeStack}
      drawerType="slide"
      lazy
      detachInactiveScreens>
      <Drawer.Screen name={ScreenName.HomeStack} component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default RootNavigation;
