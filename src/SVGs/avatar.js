import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function Avatar(props) {
  return (
    <Svg
      width='51'
      height='51'
      viewBox='0 0 51 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M25.5 6.4375C29.125 6.4375 32.0625 9.375 32.0625 13C32.0625 16.625 29.125 19.5625 25.5 19.5625C21.875 19.5625 18.9375 16.625 18.9375 13C18.9375 9.375 21.875 6.4375 25.5 6.4375ZM25.5 34.5625C34.7812 34.5625 44.5625 39.125 44.5625 41.125V44.5625H6.4375V41.125C6.4375 39.125 16.2188 34.5625 25.5 34.5625ZM25.5 0.5C18.5938 0.5 13 6.09375 13 13C13 19.9062 18.5938 25.5 25.5 25.5C32.4062 25.5 38 19.9062 38 13C38 6.09375 32.4062 0.5 25.5 0.5ZM25.5 28.625C17.1562 28.625 0.5 32.8125 0.5 41.125V50.5H50.5V41.125C50.5 32.8125 33.8438 28.625 25.5 28.625Z'
        fill='#C4C4C4'
      />
    </Svg>
  )
}