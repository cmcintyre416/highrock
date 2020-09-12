import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  position: relative;
  z-index: 203;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
`

const Item = styled(animated.div)`
  width: calc(25% - 20px);
  margin: 10px;
  min-height: 100px;
  height: auto;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`

export { Container, Item }
