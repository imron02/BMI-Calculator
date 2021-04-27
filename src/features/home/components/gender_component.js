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

const GenderComponent = ({gender, onChange}) => {
  const changeGender = value => () => onChange(value);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={changeGender('male')}>
        <Icon
          name="gender-male"
          size={60}
          color={gender === 'male' ? Colors.white : Colors.disable}
        />
        <Text style={styles.text(gender === 'male')}>MALE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changeGender('female')}>
        <Icon
          name="gender-female"
          size={60}
          color={gender === 'female' ? Colors.white : Colors.disable}
          style={styles.femaleIcon}
        />
        <Text style={styles.text(gender === 'female')}>FEMALE</Text>
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: (width - 45) / 2,
    borderRadius: 8,
  },
  text: isActive => ({
    color: isActive ? Colors.white : Colors.disable,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  }),
  femaleIcon: {
    transform: [{rotate: '45deg'}],
  },
});

export default React.memo(GenderComponent);
