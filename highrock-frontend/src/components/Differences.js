import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faMousePointer } from '@fortawesome/free-solid-svg-icons'

import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);

  .top-wrapper {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h3, p {
    text-align: center;
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    display: block;
    position: relative;
  }

  h3 {
      font-weight: 500;
      text-transform: uppercase;
  }

  p {
    font-size: 18px;
    text-align: center;
    padding-bottom: 5px;
    display: inline-block;
    position: relative;
    width: auto;
    &:after {
        content: '';    
        position: absolute;
        height: 2px;
        background: linear-gradient(135deg, #e78f19 0%, #fda085 100%);
        left: 0px;
        bottom: 0px;
    }
  }
  
  svg {
      margin-right: 10px;
      color: #e78f19;
  }

    &:hover {
        p {
            position: relative;
            &:after {
                width: 100%;
            }
        }
    }
  }


  cursor: pointer;

    @media(max-width: 600px){
        flex-direction: column;
    }
`

const Item = styled(animated.div)`
  width: calc(33.33% - 20px);
  min-width: 200px;
  margin: 10px;
  min-height: 100px;
  height: auto;
  border-radius: 5px;
  will-change: transform, opacity;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  cursor: initial;
  
    svg {
        margin-right: 20px;
        font-size: 25px;
        color: #e78f19;
    }

    &:hover {
        background: linear-gradient(135deg, #e78f19 0%, #fda085 100%);
        transform: scale(1.05);
        transition: 0.2s ease-in;
        svg {
            color: white;
        }

        p {
            text-decoration: none;
            color: white;
        }
    }


    p {
        flex-grow: 1;
        text-align: left;
        font-size: 14px;
        margin-bottom: 0px;
        color: black;
    }

    @media(max-width: 600px){
        width: 100%;
    }   
`

export { Container, Item }


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