import React, {useState} from 'react';
import {Platform} from 'react-native';
import Dashboard from '../../screens/Dashboard';
import Incomes from '../../screens/Incomes';
import Outcomes from '../../screens/Outcomes';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';
import {ThemeType} from '../../theme';
import {Button, DatePicker, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RootStackParamList} from '../../../App';

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

const HeaderRight = () => {
    return (
        <Button>
            <Icon name="date" size={25} color="#900" />
            <Text>Date</Text>
        </Button>
    );
};

const getHeader = ({title, theme}: {title: string; theme: ThemeType}) => ({
    ...basicHeaderOptions,
    headerTitle: title,
    headerRight: () => <HeaderRight />,
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
                options={({route}) => ({
                    ...getHeader({
                        title: '',
                        theme,
                    }),
                })}
            />
            <Stack.Screen name="Incomes" component={Incomes} />
            <Stack.Screen name="Outcomes" component={Outcomes} />
        </Stack.Navigator>
    );
}

export default RootStack;
