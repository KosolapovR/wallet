import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import Incomes from './src/screens/Incomes';
import Outcomes from './src/screens/Outcomes';

export type RootStackParamList = {
    Dashboard: undefined;
    Incomes: undefined;
    Outcomes: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    };

    return (
        <NavigationContainer>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                <Stack.Navigator initialRouteName="Dashboard">
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Incomes" component={Incomes} />
                    <Stack.Screen name="Outcomes" component={Outcomes} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
