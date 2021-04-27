import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from 'react-native-smooth-slider';

import {Colors} from '../../../utils/color_util';

const HeightComponent = ({value, onChange}) => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(value);
  }, [value]);

  const onValueChange = newValue => setHeight(newValue);
  const onSlidingComplete = newValue => onChange(newValue);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HEIGHT</Text>
      <Text style={styles.value}>
        {height}
        <Text style={styles.text}>cm</Text>
      </Text>
      <Slider
        style={styles.slider}
        value={value}
        minimumValue={0}
        maximumValue={250}
        step={1}
        minimumTrackTintColor={Colors.white}
        maximumTrackTintColor={Colors.disable}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
        useNativeDriver
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mirage,
    marginTop: 25,
    alignItems: 'center',
    padding: 30,
    borderRadius: 8,
  },
  text: {
    color: Colors.disable,
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: 2,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  track: {
    height: 2,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: Colors.danger,
  },
});

export default React.memo(HeightComponent);
