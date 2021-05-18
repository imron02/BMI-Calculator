import React from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {HomeStackParamList} from '../../../routes/types';
import {ScreenName} from '../../../utils/constant';
import styles, {spacing} from './result_style';

type Props = StackScreenProps<HomeStackParamList, ScreenName.ResultScreen>;
const ResultScreen = ({navigation, route}: Props) => {
  const bmi = route.params?.bmi;
  const age = route.params?.age;
  const weight = route.params?.weight;
  const height = route.params?.height;
  const gender = route.params?.gender;

  const getStatus = () => {
    let status = '';

    if (bmi <= 18.5) {
      status = 'under';
    } else if (bmi > 18.5 && bmi <= 25) {
      status = 'normal';
    } else if (bmi > 25 && bmi <= 30) {
      status = 'obese';
    } else if (bmi > 30) {
      status = 'over';
    }

    return status;
  };

  const onSave = async () => {
    try {
      const histories = await AsyncStorage.getItem('@histories');
      const data = {
        bmi,
        age,
        weight,
        height,
        gender,
        status: getStatus(),
      };
      let newData: Object[];

      if (!histories) {
        newData = [data];
      } else {
        const parsed = JSON.parse(histories);
        newData = [...parsed, data];
      }

      AsyncStorage.setItem('@histories', JSON.stringify(newData));
      Alert.alert('Success', 'Success save data', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    } catch (e) {
      Alert.alert('Error', 'Error save data', [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Your Result</Text>
        <View style={styles.card}>
          <Text style={styles.status}>{getStatus()}</Text>
          <Text style={styles.bmi}>{bmi?.toFixed(1)}</Text>
          <View style={spacing(20).space} />
          <Text style={[styles.text, styles.info]}>Normal BMI Range:</Text>
          <Text style={styles.text}>18,5 - 25 kg/m2</Text>
          <View style={spacing(20).space} />
          <Text style={[styles.text, styles.textCenter]}>
            You have a {getStatus()} body weight.{' '}
            {getStatus() === 'normal' ? 'Good Job!' : ''}
          </Text>
          <View style={spacing(50).space} />
          <TouchableOpacity style={styles.btnSave} onPress={onSave}>
            <Text style={styles.saveText}>SAVE RESULT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnBack}
        onPress={navigation.goBack}
        activeOpacity={0.8}>
        <Text style={styles.btnText}>RE-CALCULATE YOUR BMI</Text>
      </TouchableOpacity>
    </>
  );
};

export default ResultScreen;
