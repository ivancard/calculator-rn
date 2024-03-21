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
import { styles } from './Config/Theme/app-theme';

function App() {


  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
