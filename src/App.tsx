/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { CalculatorScreen } from './Presentation/Screens/CalculatorScreen';

function App() {


  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
