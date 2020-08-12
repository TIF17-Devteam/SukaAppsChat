import * as React from 'react';
import styled from 'styled-components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
    return (
        <HeaderContainer>
            {props.leftIcon ? (
                <LeftIcon onPress={props.onLeftButtonClick}>
                    <FontAwesome5 name={props.leftIcon} size={24} color="#525F7F" />
                </LeftIcon>
            ) : null}
            <HeaderTitle>
                Percakapan
            </HeaderTitle>
            <RightIcon onPress={props.rightIconCallback}>
                {props.rightIcon}
            </RightIcon>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.View`
    flex-direction: row;
    height: 52px;
    width: 100%;
    background-color: #ffffff;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(136, 152, 170, 0.15);
    elevation: 8;
`;

const HeaderTitle = styled.Text`
    font-size: 20px;
    flex-grow: 1;
    font-weight: bold;
    color: #525F7F;
    margin-left: 16px;
    margin-right: 16px;
`;

const IconContainer = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
`;

const LeftIcon = styled(IconContainer)`
    margin-left: 8px;
`;

const RightIcon = styled(IconContainer)`
    margin-right: 8px;
`;

export default Header;