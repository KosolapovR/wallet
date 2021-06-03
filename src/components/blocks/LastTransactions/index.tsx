import React from 'react';
import {Text, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import styled from 'styled-components/native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export type TransactionType = {
    _id: number;
    value: number;
    name: string;
    date: string;
};

type Prop = {
    transactions: TransactionType[];
    deleteTransaction: (id: number) => void;
};

const StyledItem = styled.View`
    padding-left: 20px;
    height: 60px;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.backgroundDarken};
    background-color: ${props => props.theme.background};
`;
const StyledHiddenItem = styled(StyledItem)`
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 5px;
`;

function LastTransactions({transactions, deleteTransaction}: Prop) {
    return (
        <SwipeListView
            data={transactions}
            keyExtractor={item => item._id?.toString()}
            renderItem={(data, rowMap) => (
                <StyledItem>
                    <Text>{data.item.name}</Text>
                    <Text>{data.item.value}</Text>
                </StyledItem>
            )}
            renderHiddenItem={(data, rowMap) => (
                <StyledHiddenItem>
                    <Button
                        onPress={() => deleteTransaction(data.item?._id)}
                        danger
                        style={{
                            borderRadius: 5,
                            width: 50,
                            marginRight: 15,
                            justifyContent: 'center',
                        }}>
                        <Icon name="trash" size={25} color="#900" />
                    </Button>
                </StyledHiddenItem>
            )}
            rightOpenValue={-75}
        />
    );
}

export default LastTransactions;
