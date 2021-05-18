import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../../utils/colors_util';
import styles from './styles';

type Props = {
  weight: number;
  onChangeWeight: Function;
};

const WeightComponent = ({weight, onChangeWeight}: Props) => {
  const timerPlusWeight = React.useRef<any>(null);
  const timerMinusWeight = React.useRef<any>(null);
  const [countWeight, setWeight] = React.useState(weight);

  React.useEffect(() => {
    setWeight(weight);
  }, [weight]);

  const minusWeight = () => {
    if (weight > 0) {
      setWeight(--weight);
      timerMinusWeight.current = setTimeout(minusWeight, 200);
    }
  };

  const plusWeight = () => {
    setWeight(++weight);
    timerPlusWeight.current = setTimeout(plusWeight, 200);
  };

  const stopWeight = () => {
    clearTimeout(timerMinusWeight.current);
    clearTimeout(timerPlusWeight.current);
    onChangeWeight(countWeight);
  };

  return (
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
  );
};

export default React.memo(WeightComponent);
