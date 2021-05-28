import React from 'react';
import {Text, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import styled from 'styled-components/native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export type TransactionType = {
    id: string;
    amount: number;
    title: string;
    date: string;
};

type Prop = {
    transactions: TransactionType[];
};

const StyledItem = styled.View`
    height: 60px;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.backgroundDarken};
    background-color: ${props => props.theme.background};
`;

function LastTransactions({transactions}: Prop) {
    return (
        <SwipeListView
            data={transactions}
            renderItem={(data, rowMap) => (
                <StyledItem>
                    <Text>{data.item.title} </Text>
                </StyledItem>
            )}
            renderHiddenItem={(data, rowMap) => (
                <StyledItem
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingTop: 5,
                    }}>
                    <Button
                        danger
                        style={{
                            borderRadius: 5,
                            width: 50,
                            marginRight: 10,
                            justifyContent: 'center',
                        }}>
                        <Icon name="trash" size={25} color="#900" />
                    </Button>
                </StyledItem>
            )}
            rightOpenValue={-75}
        />
    );
}

export default LastTransactions;
