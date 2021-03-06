import React from 'react'
import styled from 'styled-components/native'

const ButtonWrapper = styled.TouchableOpacity`
  min-width: 50%;
  width: ${props => (props.width ? props.width : '50%')};
  align-items: center;
  background: #c4c4c4;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ButtonText = styled.Text`
  font-size: 14px;
  position: relative;
  bottom: -2px;
  font-family: 'JosefinSans_300Light';
`

export default function ThinButton(props) {
  return (
    <ButtonWrapper
      width={props.width}
      onPress={() => props.navigation.navigate(props.navigateTo)}
    >
      <ButtonText>{props.label}</ButtonText>
    </ButtonWrapper>
  )
}
