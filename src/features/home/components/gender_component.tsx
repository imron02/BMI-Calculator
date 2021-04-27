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
  gender: string;
  onChange: Function;
};
const GenderComponent = ({gender, onChange}: Props) => {
  const changeGender = (value: string) => () => onChange(value);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={changeGender('male')}>
        <Icon
          name="gender-male"
          size={60}
          color={gender === 'male' ? Colors.white : Colors.disable}
        />
        <Text
          style={[
            styles.text,
            gender === 'male' ? styles.textActive : styles.textInActive,
          ]}>
          MALE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changeGender('female')}>
        <Icon
          name="gender-female"
          size={60}
          color={gender === 'female' ? Colors.white : Colors.disable}
          style={styles.femaleIcon}
        />
        <Text
          style={[
            styles.text,
            gender === 'female' ? styles.textActive : styles.textInActive,
          ]}>
          FEMALE
        </Text>
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
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  textActive: {color: Colors.white},
  textInActive: {color: Colors.disable},
  femaleIcon: {
    transform: [{rotate: '45deg'}],
  },
});

export default React.memo(GenderComponent);
