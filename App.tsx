import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import {
    Animated,
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import BootSplash from 'react-native-bootsplash';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './src/theme';
import RootStack from './src/navigators/RootStack';

export type RootStackParamList = {
    Dashboard: undefined;
    Incomes: undefined;
    Outcomes: undefined;
};

let bootSplashLogo = require('./src/assets/wallet--v2.png');

let fakeApiCallWithoutBadNetwork = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    };
    let [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
    let [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
    let opacity = useRef(new Animated.Value(1));
    let translateY = useRef(new Animated.Value(0));

    let init = async () => {
        // You can uncomment this line to add a delay on app startup
        await fakeApiCallWithoutBadNetwork(1000);

        await BootSplash.hide();

        Animated.stagger(250, [
            Animated.spring(translateY.current, {
                useNativeDriver: true,
                toValue: -50,
            }),
            Animated.spring(translateY.current, {
                useNativeDriver: true,
                toValue: Dimensions.get('window').height,
            }),
        ]).start();

        Animated.timing(opacity.current, {
            useNativeDriver: true,
            toValue: 0,
            duration: 150,
            delay: 350,
        }).start(() => {
            setBootSplashIsVisible(false);
        });
    };

    useEffect(() => {
        bootSplashLogoIsLoaded && init();
    }, [bootSplashLogoIsLoaded]);

    return (
        <ThemeProvider theme={dark}>
            <NavigationContainer>
                <SafeAreaView style={backgroundStyle}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    />
                    {bootSplashIsVisible && (
                        <Animated.View
                            style={[
                                StyleSheet.absoluteFill,
                                styles.bootsplash,
                                {opacity: opacity.current},
                            ]}>
                            <Animated.Image
                                source={bootSplashLogo}
                                fadeDuration={0}
                                onLoadEnd={() =>
                                    setBootSplashLogoIsLoaded(true)
                                }
                                style={[
                                    styles.logo,
                                    {
                                        transform: [
                                            {translateY: translateY.current},
                                        ],
                                    },
                                ]}
                            />
                        </Animated.View>
                    )}
                    <RootStack />
                </SafeAreaView>
            </NavigationContainer>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        margin: 20,
        lineHeight: 30,
        color: '#333',
        textAlign: 'center',
    },
    bootsplash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logo: {
        height: 100,
        width: 100,
    },
});

export default App;
