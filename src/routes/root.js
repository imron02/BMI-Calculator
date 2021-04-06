import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderComponent from '../components/header_component';
import HomeScreen from '../features/home/screens/home_screen';
import ResultScreen from '../features/result/screens/result_screen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        header: () => <HeaderComponent />,
      }}
    />
    <Stack.Screen
      name="Result"
      component={ResultScreen}
      options={{
        header: () => <HeaderComponent />,
      }}
    />
  </Stack.Navigator>
);

const RootNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerType="slide"
    lazy
    detachInactiveScreens>
    <Drawer.Screen name="HomeStack" component={HomeStack} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
);

export default RootNavigation;
