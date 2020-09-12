import React, { useState, useRef } from "react"
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Container, Item } from '../constants/styles'
import differencesData from '../constants/differencesData'

const Differences = () => {
    const [open, set] = useState(false)

    const springRef = useRef()
    const { size, opacity, ...rest } = useSpring({
      ref: springRef,
      config: config.stiff,
      from: { size: '100%', background: '#a8a8a8' },
      to: { size: open ? '100%' : '100%', background: open ? 'white' : '#a8a8a8' }
    })
  
    const transRef = useRef()
    const transitions = useTransition(open ? differencesData : [], (item, i) => i, {
      ref: transRef,
      unique: true,
      trail: 400 / differencesData.length,
      from: { opacity: 0, transform: 'scale(0)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0)' }
    })
  
    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])
  
    return (
      <>
        <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
          {transitions.map(({ item, key, props }) => (
            <Item key={key} style={{ ...props, background: item.css }} />
          ))}
        </Container>
      </>
    )
}


export default Differences