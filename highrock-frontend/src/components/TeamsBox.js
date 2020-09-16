import React, { useState } from "react";
import { Link } from "gatsby";
import { animated, useSpring, useSprings } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

import { Container } from "./ui/atoms/container";
import { Flex } from "./ui/atoms/flex";
import { Box } from "./ui/atoms/box";

const ComponentContainer = styled(Container)`
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  border-radius: 4px;
  overflow: hidden;
  padding: 0px;
`;

const GridContainer = styled(Flex)`
  flex-direction: row;
  border-radius: 4px;

  @media(max-width: 992px){
    flex-direction: column;
  } 

`;

const AnimatedItem = styled(animated(Flex))`
  position: relative;
  cursor: pointer;
  width: 33.33%;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  svg {
    margin-right: 10px;
  }

  @media(max-width: 992px){
    width: 100%;
  } 
`;

const AnimatedWrapper = styled(animated(Flex))`
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  div {
    padding: 20px 40px;
    width: 100%;
  }

  h4 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p, h4 {
    text-align: left;
    font-family: 'Nunito', sans-serif;
  }

  .position {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  &:before {
    content: '';    
    position: absolute;
    height: 4px;
    background: linear-gradient(135deg, #e78f19 0%, #fda085 100%);
    left: 0px;
    right: 0px;
    top: 0px;
}

@media(max-width: 992px){
  height: auto !important;
} 

`;

const AnimatedBox = styled(animated(Box))``;
AnimatedBox.defaultProps = {};

const TeamsBox = ({team}) => {
  const [index, setIndex] = useState(null);

  const springs = useSprings(
    team.length,
    team.map((item, i) => ({
      background: (index === null) | (i === index) ? '#3f4243' : 'white',
      color: (index === null) | (i === index) ? 'white' : '#3f4243',
      opacity: 1,
      height: index === null ? 120 : 60,
      from: {
        opacity: 0,
        height: 120
      }
    }))
  );

  const [springProps, setSpringProps] = useSpring(() => ({
    from: { height: 0, opacity: 0 }
  }));

  const onItemClick = () => {
    setSpringProps({
      height: 400,
      width: '100%',
      opacity: 1
    });
  };

  return <ComponentContainer>
      <AnimatedWrapper style={springProps}>
        <AnimatedBox>{springProps.z}</AnimatedBox>
          <div>
            <h4>
              {index !== null && team[index].name}
            </h4>
            <p className="position">
              {index !== null && team[index].position}
            </p>
            <p>
              {index !== null && team[index].teaser}
            </p>
            <Link className="btn" to={index !== null && `team/${team[index].slug}`}>{index !== null && `Visit ${team[index].name}'s Bio`}</Link>
          </div>
      </AnimatedWrapper>
      <GridContainer pt={1}>
        {springs.map((props, i) => (
          <AnimatedItem
            key={i}
            onClick={() => {
              setIndex(i);
              onItemClick(i);
            }}
            style={props}
          >
            <FontAwesomeIcon icon={faPortrait}/>
            {team[i].name}
          </AnimatedItem>
        ))}
      </GridContainer>
    </ComponentContainer>
}

export default TeamsBox;