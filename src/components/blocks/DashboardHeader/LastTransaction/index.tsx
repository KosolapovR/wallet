import React from 'react';
import styled from 'styled-components/native';

type Props = {
    lastTransactionAmount: number;
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
    align-self: center;
    border-radius: 6px;
`;

function LastTransaction({lastTransactionAmount}: Props) {
    return (
        <StyledWrapper style={{overflow: 'hidden'}}>
            {lastTransactionAmount > 0 ? (
                <StyledGreenText>${lastTransactionAmount}</StyledGreenText>
            ) : (
                <StyledRedText>${lastTransactionAmount}</StyledRedText>
            )}
        </StyledWrapper>
    );
}

export default LastTransaction;
