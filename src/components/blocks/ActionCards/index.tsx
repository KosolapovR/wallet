import React from 'react';
import {FlatList} from 'react-native';
import ActionCard from './ActionCard';

type Props = {};

export type actionType = {
    id: string;
    title: string;
    amount: number;
    diff: number;
    color: string;
};
type actionsDataType = actionType[];

const actionsData: actionsDataType = [
    {
        id: '1',
        title: 'поступления',
        amount: 890.3,
        diff: 0.6,
        color: '#75c4bb',
    },
    {
        id: '2',
        title: 'расходы',
        amount: 267.89,
        diff: -0.3,
        color: '#7584c4',
    },
    {
        id: '3',
        title: 'баланс',
        amount: 138,
        diff: 2.56,
        color: '#7f828b',
    },
];

function ActionCards({}: Props) {
    return (
        <FlatList
            style={{paddingLeft: 15, paddingRight: 15}}
            data={actionsData}
            horizontal
            renderItem={({item}) => <ActionCard actionEntity={item} />}
            keyExtractor={item => item.id}
        />
    );
}

export default ActionCards;
