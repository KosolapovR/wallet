import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import styled from 'styled-components/native';
import {Container} from '../../components/styled';
import DashboardHeader from '../../components/blocks/DashboardHeader';
import ActionCards from '../../components/blocks/ActionCards';
import {View} from 'react-native';
import LastTransactions, {
    TransactionType,
} from '../../components/blocks/LastTransactions';

type DashboardScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Dashboard'
>;

type Props = {
    navigation: DashboardScreenNavigationProp;
};

const StyledWrapper = styled(Container)`
    background-color: ${props => props.theme.background};
`;

const transactions: TransactionType[] = [
    {
        id: '1',
        amount: -198.25,
        title: 'I tunes Gift Card #242352',
        date: 'Today, 13:45',
    },
    {
        id: '2',
        amount: 260,
        title: 'Salary',
        date: 'May 23, 2021',
    },
    {
        id: '3',
        amount: -80,
        title: 'PayPal transfer',
        date: 'May 23, 2021',
    },
    {
        id: '4',
        amount: 260,
        title: 'Salary',
        date: 'April 20, 2021',
    },
];

function Dashboard({navigation}: Props) {
    const handleGoToIncomes = () => {
        navigation.navigate('Incomes');
    };

    const handleGoToOutcomes = () => {
        navigation.navigate('Outcomes');
    };
    return (
        <StyledWrapper>
            <DashboardHeader
                balanceAmount={32058.98}
                lastTransactionAmount={3989.0}
            />
            <ActionCards />
            <LastTransactions transactions={transactions} />
        </StyledWrapper>
    );
}

export default Dashboard;
