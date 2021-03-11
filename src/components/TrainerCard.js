import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components/native'
const data = require('../data.json')

const Card = styled.View`
  width: 350px;
  flex-direction: row;
  align-items: flex-start;
  background: ${data.colors.grey};
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const AvatarWrapper = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-left: 10px;
`

const Info = styled.View`
  flex: 2.5;
  padding-right: 20px;
`

const TrainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 10px;
`
const Rating = styled.View`
  width: 50px;
  height: 50px;
  border: 5px solid #a7cdbd;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`

const Tags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const Tag = styled.View`
  background: #c4c4c4;
  border-radius: 6px;
  padding: 4px;
  margin: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default function TrainerCard(props) {
  return (
    <Card>
      <AvatarWrapper>
        <Image
          source={props.trainer.image}
          style={{ width: 80, height: 80, borderRadius: 20 }}
        ></Image>
      </AvatarWrapper>
      <Info>
        <TrainerInfo>
          <View style={{ flex: 1, paddingRight: 20, paddingBottom: 0 }}>
            <Text
              style={{ fontFamily: 'JosefinSans_400Regular', fontSize: 10 }}
            >
              {props.trainer.name}
            </Text>
            <Text style={{ fontFamily: 'JosefinSans_300Light', fontSize: 10 }}>
              {props.trainer.text}
            </Text>
          </View>
          <Rating>
            <Text
              style={{ fontFamily: 'JosefinSans_400Regular', fontSize: 10 }}
            >
              {props.trainer.rating}
            </Text>
          </Rating>
        </TrainerInfo>
        <Tags>
          {props.trainer.tags.map(tag => (
            <Tag>
              <Text
                style={{ fontFamily: 'JosefinSans_300Light', fontSize: 10 }}
              >
                {tag}
              </Text>
            </Tag>
          ))}
        </Tags>
      </Info>
    </Card>
  )
}
