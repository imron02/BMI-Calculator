import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackParamList} from '../../../routes/types';
import {ScreenName} from '../../../utils/constant';
import styles from './home_style';
import GenderComponent from '../components/gender_component';
import HeightComponent from '../components/height_component';
import WeightComponent from '../components/weight_component';
import AgeComponent from '../components/age_component';

type Props = StackScreenProps<HomeStackParamList, ScreenName.HomeScreen>;

function HomeScreen({navigation}: Props) {
  const [gender, setGender] = React.useState<string>('');
  const [height, setHeight] = React.useState<number>(0);
  const [weight, setWeight] = React.useState<number>(0);
  const [age, setAge] = React.useState<number>(0);

  useFocusEffect(
    React.useCallback(() => {
      setGender('');
      setHeight(0);
      setWeight(0);
      setAge(0);
    }, []),
  );

  const canSubmit = () => gender && height && weight && age;
  const onSubmit = () => {
    const bmi = Number(weight / (Math.pow(height, 2) / 10000));
    navigation.navigate(ScreenName.ResultScreen, {
      bmi,
    });
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}>
        <GenderComponent gender={gender} onChange={setGender} />
        <HeightComponent value={height} onChange={setHeight} />
        <View style={styles.weightAndAge}>
          <WeightComponent weight={weight} onChangeWeight={setWeight} />
          <AgeComponent age={age} onChangeAge={setAge} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.button,
          canSubmit() ? styles.btnActive : styles.btnInActive,
        ]}
        disabled={!canSubmit()}
        onPress={onSubmit}
        activeOpacity={0.8}>
        <Text style={styles.btnText}>CALCULATE YOUR BMI</Text>
      </TouchableOpacity>
    </>
  );
}

export default HomeScreen;
