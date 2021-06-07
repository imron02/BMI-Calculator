import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {RootStackParamList} from '../../../routes/types';
import {ScreenName} from '../../../utils/constant';
import HeaderComponent from '../../../components/header_component';
import styles from './history_style';

type Props = StackScreenProps<RootStackParamList, ScreenName.HistoryScreen>;
type HistoryProp = {
  bmi: number;
  gender: string;
  age: number;
  height: number;
  weight: number;
  status: string;
};

const Item = ({item: history}: {item: HistoryProp}) => {
  return (
    <View style={styles.item}>
      <View style={styles.status}>
        <Text style={styles.statusLabel}>{history.status.toUpperCase()}</Text>
      </View>
      <View style={styles.description}>
        <Text style={[styles.itemLabel, styles.bmiLabel]}>
          BMI: <Text>{history.bmi.toFixed(1)}</Text>
        </Text>
        <Text style={styles.itemLabel}>
          Age: <Text>{history.age}</Text>
        </Text>
        <Text style={styles.itemLabel}>
          Gender: <Text>{history.gender}</Text>
        </Text>
        <Text style={styles.itemLabel}>
          Weight: <Text>{history.weight}</Text>
        </Text>
        <Text style={styles.itemLabel}>
          Height: <Text>{history.height}</Text>
        </Text>
      </View>
    </View>
  );
};

const HistoryScreen = ({}: Props) => {
  const [histories, setHistories] = useState<HistoryProp[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('@histories').then(result => {
      const parsedHistory = result ? JSON.parse(result) : [];
      setHistories(parsedHistory.reverse());
    });
  }, []);

  return (
    <>
      <HeaderComponent />
      <View style={styles.container}>
        <Text style={styles.title}>Your History</Text>
        <FlatList
          data={histories}
          renderItem={Item}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    </>
  );
};

export default HistoryScreen;
