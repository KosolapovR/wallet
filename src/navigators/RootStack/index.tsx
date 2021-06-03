import React from 'react';
import Dashboard from '../../screens/Dashboard';
import Incomes from '../../screens/Incomes';
import Outcomes from '../../screens/Outcomes';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';
import {ThemeType} from '../../theme';

import {RootStackParamList} from '../../../App';
import {NavigationProp} from '@react-navigation/native';
import IconButton from '../../components/IconButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

const basicHeaderOptions = {
    headerStyle: {
        elevation: 0,
        shadowOffset: {height: 0, width: 0},
        backgroundColor: '#fff',
    },
    headerTitleStyle: {
        color: '#b6b6b6',
    },
    cardStyle: {backgroundColor: 'transparent'},
};
const HeaderLeft = ({navigation}: {navigation: NavigationProp<any>}) => {
    return (
        <View style={{paddingLeft: 15, paddingTop: 20}}>
            <IconButton
                onPress={() => navigation.goBack()}
                icon={<Icon size={15} name="chevron-left" />}
                backgroundColor={'transparent'}
            />
        </View>
    );
};

const getHeader = ({
    navigation,
    title,
    theme,
}: {
    navigation: NavigationProp<any>;
    title: string;
    theme: ThemeType;
}) => ({
    ...basicHeaderOptions,
    headerTitle: title,
    headerLeft: () => <HeaderLeft navigation={navigation} />,
    headerStyle: {
        ...basicHeaderOptions.headerStyle,
        backgroundColor: theme.background,
    },
});

function RootStack() {
    const theme = useTheme();

    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={({route, navigation}) => ({
                    ...getHeader({
                        navigation,
                        title: '',
                        theme,
                    }),
                    headerLeft: () => <></>,
                })}
            />
            <Stack.Screen
                name="Incomes"
                component={Incomes}
                options={({route, navigation}) => ({
                    ...getHeader({
                        navigation,
                        title: '',
                        theme,
                    }),
                })}
            />
            <Stack.Screen name="Outcomes" component={Outcomes} />
        </Stack.Navigator>
    );
}

export default RootStack;
