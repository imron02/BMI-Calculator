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
  const minusWeight = () => {
    if (weight > 0) {
      onChangeWeight(--weight);
    }
  };

  const plusWeight = () => onChangeWeight(++weight);

  const minusAge = () => {
    if (age > 0) {
      onChangeAge(--age);
    }
  };

  const plusAge = () => onChangeAge(++age);

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>WEIGHT</Text>
        <Text style={styles.value}>{weight}</Text>
        <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.action} onPress={minusWeight}>
            <Icon name="minus" size={30} color={Colors.disable} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={plusWeight}>
            <Icon name="plus" size={30} color={Colors.disable} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.square}>
        <Text style={styles.text}>AGE</Text>
        <Text style={styles.value}>{age}</Text>
        <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.action} onPress={minusAge}>
            <Icon name="minus" size={30} color={Colors.disable} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={plusAge}>
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
