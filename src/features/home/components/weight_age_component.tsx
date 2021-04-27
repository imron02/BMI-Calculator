import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../utils/colors_util';

type Props = {
  weight: number;
  age: number;
  onChangeWeight: Function;
  onChangeAge: Function;
};

const WeightAndAgeComponent = ({
  weight,
  age,
  onChangeWeight,
  onChangeAge,
}: Props) => {
  const timerPlusAge = React.useRef<any>(null);
  const timerMinusAge = React.useRef<any>(null);
  const timerPlusWeight = React.useRef<any>(null);
  const timerMinusWeight = React.useRef<any>(null);
  const [countAge, setAge] = React.useState(weight);
  const [countWeight, setWeight] = React.useState(age);

  React.useEffect(() => {
    setAge(age);
    setWeight(weight);
  }, [weight, age]);

  const minusWeight = () => {
    if (weight >= 0) {
      setWeight(weight--);
      timerMinusWeight.current = setTimeout(minusWeight, 200);
    }
  };

  const plusWeight = () => {
    setWeight(weight++);
    timerPlusWeight.current = setTimeout(plusWeight, 200);
  };

  const stopWeight = () => {
    clearTimeout(timerMinusWeight.current);
    clearTimeout(timerPlusWeight.current);
    onChangeWeight(countWeight);
  };

  const minusAge = () => {
    if (age >= 0) {
      setAge(age--);
      timerMinusAge.current = setTimeout(minusAge, 200);
    }
  };

  const plusAge = () => {
    if (age <= 100) {
      setAge(age++);
      timerPlusAge.current = setTimeout(plusAge, 200);
    }
  };

  const stopAge = () => {
    clearTimeout(timerPlusAge.current);
    clearTimeout(timerMinusAge.current);
    onChangeAge(countAge);
  };

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>WEIGHT</Text>
        <Text style={styles.value}>{countWeight}</Text>
        <View style={styles.actionWrapper}>
          <TouchableOpacity
            style={styles.action}
            onPressIn={minusWeight}
            onPressOut={stopWeight}>
            <Icon name="minus" size={30} color={Colors.disable} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.action}
            onPressIn={plusWeight}
            onPressOut={stopWeight}>
            <Icon name="plus" size={30} color={Colors.disable} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.square}>
        <Text style={styles.text}>AGE</Text>
        <Text style={styles.value}>{countAge}</Text>
        <View style={styles.actionWrapper}>
          <TouchableOpacity
            style={styles.action}
            onPressIn={minusAge}
            onPressOut={stopAge}>
            <Icon name="minus" size={30} color={Colors.disable} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.action}
            onPressIn={plusAge}
            onPressOut={stopAge}>
            <Icon name="plus" size={30} color={Colors.disable} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  square: {
    backgroundColor: Colors.mirage,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 45) / 2,
    borderRadius: 8,
    paddingVertical: 20,
  },
  text: {
    color: Colors.disable,
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
  actionWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  action: {
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(WeightAndAgeComponent);
