import React, {EffectCallback, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import {RootStackParamList} from '../../../App';
import {Container} from '../../components/styled';
import DashboardHeader from '../../components/blocks/DashboardHeader';
import ActionCards from '../../components/blocks/ActionCards';
import LastTransactions from '../../components/blocks/LastTransactions';
import Realm from 'realm';
import {OutcomeSchema} from '../../realmSchemas';

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

const StyledDatePicker = styled.Pressable`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 8px;
    margin-right: 15px;
    margin-top: 15px;
    border: 1px solid #545454;
    border-radius: 5px;
`;

const StyledDateText = styled.Text`
    color: #dedede;
    font-weight: bold;
    margin-right: 12px;
    margin-left: 12px;
`;

type DateOrTime = 'date' | 'time';

function Dashboard({navigation}: Props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState<DateOrTime | undefined>('date');
    const [show, setShow] = useState(false);

    const [transactions, setTransactions] = useState([]);

    const onChange = (event: Event, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode: DateOrTime) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const handleCardClick = (redirectScreen: 'Incomes' | 'Outcomes') => {
        console.log('attempt to redirect', redirectScreen);
        navigation.navigate(redirectScreen);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <StyledDatePicker onPress={showDatepicker}>
                    <Icon name="calendar" size={15} color="#545454" />
                    <StyledDateText>{date.getFullYear()}</StyledDateText>
                    <Icon name="chevron-down" size={15} color="#545454" />
                </StyledDatePicker>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        const realm = new Realm({
            schema: [OutcomeSchema],
            schemaVersion: 1,
        });
        realm.write(() => {
            // @ts-ignore

            if (!realm.objectForPrimaryKey('Outcome', 1))
                realm.create('Outcome', {
                    _id: 1,
                    name: 'Food',
                    value: 354,
                });

            // @ts-ignore
            if (!realm.objectForPrimaryKey('Outcome', 2))
                realm.create('Outcome', {
                    _id: 2,
                    name: 'Oil',
                    value: 2000,
                });

            // @ts-ignore
            if (!realm.objectForPrimaryKey('Outcome', 3))
                realm.create('Outcome', {
                    _id: 3,
                    name: 'Education',
                    value: 1000,
                });
        });

        const outcomes: any = realm.objects('Outcome');
        console.log('outcomes', outcomes);
        setTransactions(outcomes);
    }, []);

    const handleDeleteTransaction = (id: number) => {
        const realm = new Realm({
            schema: [
                {
                    name: 'Outcome',
                    properties: {
                        _id: 'int',
                        name: 'string',
                        value: 'int',
                    },
                    primaryKey: '_id',
                },
            ],
            schemaVersion: 1,
        });

        realm.beginTransaction();

        try {
            realm.delete(realm.objectForPrimaryKey('Outcome', id));
            realm.commitTransaction();
        } catch (error) {
            realm.cancelTransaction();
            console.log('delete error: ', error);
        }

        const outcomes: any = realm.objects('Outcome');
        setTransactions(outcomes);
    };

    return (
        <StyledWrapper>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

            <DashboardHeader
                balanceAmount={32058.98}
                lastTransactionAmount={3989.0}
            />
            <ActionCards onCardClick={handleCardClick} />
            <LastTransactions
                transactions={transactions}
                deleteTransaction={handleDeleteTransaction}
            />
        </StyledWrapper>
    );
}

export default Dashboard;
