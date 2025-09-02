
import { StatusBar, StyleSheet, useColorScheme, View,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen'

function App() {

  return (
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
