import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../../utils/color_util';

const GenderComponent = ({weight, age, onChangeWeight, onChangeAge}) => {
  const timerPlusAge = React.useRef(null);
  const timerMinusAge = React.useRef(null);
  const timerPlusWeight = React.useRef(null);
  const timerMinusWeight = React.useRef(null);
  const [countAge, setAge] = React.useState(weight);
  const [countWeight, setWeight] = React.useState(age);

  React.useEffect(() => {
    setAge(age);
    setWeight(weight);
  }, [weight, age]);

  const minusWeight = () => {
    if (weight > 0) {
      setWeight(prevValue => prevValue - 1);
      timerMinusWeight.current = setTimeout(minusWeight, 100);
    }
  };

  const plusWeight = () => {
    setWeight(prevValue => prevValue + 1);
    timerPlusWeight.current = setTimeout(plusWeight, 100);
  };

  const stopWeight = () => {
    clearTimeout(timerMinusWeight.current);
    clearTimeout(timerPlusWeight.current);
    onChangeWeight(countWeight);
  };

  const minusAge = () => {
    if (age > 0) {
      setAge(prevValue => prevValue - 1);
      timerMinusAge.current = setTimeout(minusAge, 100);
    }
  };

  const plusAge = () => {
    setAge(prevValue => prevValue + 1);
    timerPlusAge.current = setTimeout(plusAge, 100);
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

export default React.memo(GenderComponent);
