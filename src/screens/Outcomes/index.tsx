import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {Pressable, Text, View} from 'react-native';

type DashboardScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Outcomes'
>;

type Props = {
    navigation: DashboardScreenNavigationProp;
};

function Outcomes({navigation}: Props) {
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

export default Outcomes;
