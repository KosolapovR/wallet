import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
} from 'react-native';


const App: () => JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Wallet App</Text>
    </SafeAreaView>
  );
};


export default App;
