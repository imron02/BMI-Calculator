import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles, {spacing} from './result_style';

import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../../routes/types';
import {ScreenName} from '../../../utils/constant';

type Props = StackScreenProps<HomeStackParamList, ScreenName.ResultScreen>;
const ResultScreen = ({navigation, route}: Props) => {
  const bmi = route.params?.bmi;

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
          <TouchableOpacity style={styles.btnSave}>
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
