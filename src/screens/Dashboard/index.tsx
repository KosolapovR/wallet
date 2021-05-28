import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {SafeAreaView, Pressable, Text, View} from 'react-native';

type DashboardScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Dashboard'
>;

type Props = {
    navigation: DashboardScreenNavigationProp;
};

function Dashboard({navigation}: Props) {
    const handleGoToIncomes = () => {
        navigation.navigate('Incomes');
    };

    const handleGoToOutcomes = () => {
        navigation.navigate('Outcomes');
    };
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Pressable onPress={handleGoToIncomes}>
                    <Text>Go to Incomes</Text>
                </Pressable>
                <Pressable onPress={handleGoToOutcomes}>
                    <Text>Go to Outcomes</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default Dashboard;
