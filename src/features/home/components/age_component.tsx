import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../../utils/colors_util';
import styles from './styles';

type Props = {
  age: number;
  onChangeAge: Function;
};

const AgeComponent = ({age, onChangeAge}: Props) => {
  const timerPlusAge = React.useRef<any>(null);
  const timerMinusAge = React.useRef<any>(null);
  const [countAge, setAge] = React.useState(age);

  React.useEffect(() => {
    setAge(age);
  }, [age]);

  const minusAge = () => {
    if (age > 0) {
      setAge(--age);
      timerMinusAge.current = setTimeout(minusAge, 200);
    }
  };

  const plusAge = () => {
    if (age < 100) {
      setAge(++age);
      timerPlusAge.current = setTimeout(plusAge, 200);
    }
  };

  const stopAge = () => {
    clearTimeout(timerPlusAge.current);
    clearTimeout(timerMinusAge.current);
    onChangeAge(countAge);
  };

  return (
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
  );
};

export default AgeComponent;
