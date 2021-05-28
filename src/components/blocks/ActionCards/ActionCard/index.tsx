import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {actionType} from '../index';

type Props = {
    actionEntity: actionType;
};

const StyledRedText = styled.Text`
    color: ${props => props.theme.colors.red};
    background-color: ${props => `${props.theme.colors.red}33`};
    padding: 6px 18px;
    font-size: 12px;
`;

const StyledGreenText = styled.Text`
    color: ${props => props.theme.colors.green};
    background-color: ${props => `${props.theme.colors.green}33`};
    padding: 6px 18px;
    font-size: 12px;
`;

const StyledWrapper = styled.View`
    width: 160px;
    height: 105px;
    margin-right: 10px;
    border-radius: 8px;
    padding: 10px;
`;

function ActionCard({actionEntity}: Props) {
    return (
        <StyledWrapper
            style={{overflow: 'hidden', backgroundColor: actionEntity.color}}>
            <Text>{actionEntity.amount}</Text>
        </StyledWrapper>
    );
}

export default ActionCard;
