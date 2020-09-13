import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Container, Item } from '../constants/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faMousePointer } from '@fortawesome/free-solid-svg-icons'

const query = graphql`
  {
    allStrapiDifferences {
      nodes {
        id
        text
      }
    }
  }
`;

const Differences = () => {
    const data = useStaticQuery(query);
    const {
        allStrapiDifferences: { nodes: differences },
    } = data;
    
    const [open, set] = useState(false);
    const springRef = useRef();
    const { opacity, ...rest } = useSpring({
      ref: springRef,
      config: config.stiff,
      from: { size: '100%', background: 'white' },
      to: { size: open ? '100%' : '100%', background: open ? 'white' : 'white' }
    });
  
    const transRef = useRef()
    const transitions = useTransition(open ? differences : [], (item, i) => i, {
      ref: transRef,
      unique: true,
      trail: 400 / differences.length,
      from: { opacity: 0, transform: 'scale(0)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0)' }
    });
  
    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);
  
    return (
      <>
        <Container style={{ ...rest }} onClick={() => set(open => !open)}>
            <div class="top-wrapper">
            <h3>The High Rock difference</h3>
            <p><FontAwesomeIcon icon={faMousePointer}/> learn more</p>
            </div>
          {transitions.map(({ item, key, props }) => (
            <Item key={key} style={{ ...props}}> <FontAwesomeIcon icon={faUserCheck}/><p>{item.text}</p>
            </Item>
          ))}
        </Container>
      </>
    )
}


export default Differences