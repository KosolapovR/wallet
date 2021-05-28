import styled from 'styled-components/native';

const BoldText = styled.Text`
    font-weight: bold;
`;

const Container = styled.SafeAreaView`
    flex: 1;
`;

const LargeText = styled.Text`
    font-size: 24px;
`;

const MediumText = styled.Text`
    font-size: 14px;
`;

const SmallText = styled.Text`
    font-size: 12px;
`;

export {Container, BoldText, LargeText, MediumText, SmallText};
