import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {Colors} from '../utils/color_util';

const HeaderComponent = () => {
  const navigation = useNavigation();
  const toggle = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <View style={styles.container}>
      <Pressable style={styles.drawerAction} onPress={toggle}>
        <Icon name="bar-chart" size={30} color={Colors.white} />
      </Pressable>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>BMI CALCULATOR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerAction: {
    position: 'absolute',
    left: 0,
    width: 40,
    transform: [{rotate: '270deg'}, {rotateX: '180deg'}, {translateX: 5}],
    zIndex: 1,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HeaderComponent;
