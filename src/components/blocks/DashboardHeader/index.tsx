import React from 'react';
import styled from 'styled-components/native';
import {LargeText, SmallText} from '../../styled';
import LastTransaction from './LastTransaction';

type Props = {
    balanceAmount: number;
    lastTransactionAmount: number;
};

const StyledTitle = styled(SmallText)`
    color: ${props => props.theme.colors.secondary};
    align-self: center;
`;

const StyledBalance = styled(LargeText)`
    color: ${props => props.theme.colors.primary};
    align-self: center;
    font-weight: bold;
`;
const StyledWrapper = styled.View`
    justify-content: space-between;
    height: 200px;
    padding: 55px;
`;

function DashboardHeader({balanceAmount, lastTransactionAmount}: Props) {
    return (
        <StyledWrapper>
            <StyledTitle>TOTAL BALANCE</StyledTitle>
            <StyledBalance>${balanceAmount}</StyledBalance>
            <LastTransaction lastTransactionAmount={lastTransactionAmount} />
        </StyledWrapper>
    );
}

export default DashboardHeader;
