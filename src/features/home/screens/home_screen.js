import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import styles from './home_style';
import GenderComponent from '../components/gender_component';
import HeightComponent from '../components/height_component';
import WeightAndHeightComponent from '../components/weight_age_component';

const HomeScreen = ({navigation}) => {
  const [gender, setGender] = React.useState(null);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [age, setAge] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      setGender(null);
      setHeight(0);
      setWeight(0);
      setAge(0);
    }, []),
  );

  const canSubmit = () => gender && height && weight && age;
  const onSubmit = () => {
    const bmi = Number(weight / (Math.pow(height, 2) / 10000)).toFixed(1);
    navigation.navigate('Result', {
      gender,
      height,
      weight,
      age,
      bmi,
    });
  };

  return (
    <View style={styles.container}>
      <GenderComponent gender={gender} onChange={setGender} />
      <HeightComponent value={height} onChange={setHeight} />
      <WeightAndHeightComponent
        weight={weight}
        age={age}
        onChangeWeight={setWeight}
        onChangeAge={setAge}
      />
      <TouchableOpacity
        style={styles.button(canSubmit())}
        disabled={!canSubmit()}
        onPress={onSubmit}
        activeOpacity={0.8}>
        <Text style={styles.btnText}>CALCULATE YOUR BMI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
