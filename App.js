import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './src/routes/root';
import {Colors} from './src/utils/color_util';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar animated backgroundColor={Colors.dark} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
