import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import ThinButton from '../components/ThinButton'
import ThinButtonGrey from '../components/ThinButtonGrey'
import HeaderLogo from '../components/HeaderLogo'

const QuestionWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const ButtonWrapper = styled.View`
  flex: 9;
  width: 100%;
  align-items: center;
`

export default function LearnMoreScreen({ navigation }) {
  return (
    <Container>
      <HeaderLogo />
      <QuestionWrapper>
        <Text
          style={{
            fontFamily: 'JosefinSans_400Regular',
            fontSize: 20,
            textAlign: 'center'
          }}
        >
          WE WANT TO LEARN MORE ABOUT YOU SO WE CAN MAKE A FITNESS MATCH
        </Text>
      </QuestionWrapper>
      <ButtonWrapper>
        <ThinButton
          navigateTo='Goal'
          label='LETS GO!'
          navigation={navigation}
        ></ThinButton>
        <ThinButtonGrey
          navigateTo='TabNavigator'
          label="NO, I'M GOOD"
          navigation={navigation}
        ></ThinButtonGrey>
      </ButtonWrapper>
      <Text
        style={{ flex: 1, fontFamily: 'JosefinSans_300Light', fontSize: 20 }}
        onPress={() => navigation.navigate('Register')}
      >
        BACK
      </Text>
    </Container>
  )
}
