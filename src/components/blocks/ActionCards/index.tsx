import React from 'react';
import {FlatList, View} from 'react-native';
import ActionCard from './ActionCard';
import styled from 'styled-components/native';

type Props = {
    onCardClick: (type: 'Outcomes' | 'Incomes') => void;
};

export type actionType = {
    id: string;
    title: string;
    amount: number;
    diff: number;
    color: string;
    redirectScreen: 'Outcomes' | 'Incomes';
};
type actionsDataType = actionType[];

const StyledWrapper = styled.View`
    padding-right: 25px;
    margin-bottom: 25px;
`;

const actionsData: actionsDataType = [
    {
        id: '1',
        title: 'Incomes',
        amount: 890.3,
        diff: 0.6,
        color: '#75c4bb',
        redirectScreen: 'Incomes',
    },
    {
        id: '2',
        title: 'Outcomes',
        amount: 267.89,
        diff: -0.3,
        color: '#7584c4',
        redirectScreen: 'Outcomes',
    },
    {
        id: '3',
        title: 'Balance',
        amount: 138,
        diff: 2.56,
        color: '#7f828b',
        redirectScreen: 'Outcomes',
    },
];

function ActionCards({onCardClick}: Props) {
    return (
        <StyledWrapper>
            <FlatList
                style={{paddingLeft: 20, overflow: 'visible'}}
                data={actionsData}
                horizontal
                renderItem={({item}) => (
                    <ActionCard
                        actionEntity={item}
                        handleClick={() => onCardClick(item.redirectScreen)}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </StyledWrapper>
    );
}

export default ActionCards;
