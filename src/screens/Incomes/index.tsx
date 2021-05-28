import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {Text, Pressable, View} from 'react-native';

type DashboardScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Incomes'
>;

type Props = {
    navigation: DashboardScreenNavigationProp;
};

function Incomes({navigation}: Props) {
    const handleGoToDashboard = () => {
        navigation.navigate('Dashboard');
    };

    return (
        <View>
            <Pressable onPress={handleGoToDashboard}>
                <Text>Go to dashboard</Text>
            </Pressable>
        </View>
    );
}

export default Incomes;
