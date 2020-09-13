import React, { useState } from "react";
import { Link } from "gatsby"
import { animated, useSpring, useSprings } from "react-spring";
import styled from "styled-components";

const ComponentContainer = styled('div')`
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  border-radius: 4px;
  overflow: hidden;
`;

const GridContainer = styled('div')`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
`;

const AnimatedItem = styled(animated('div'))`
  cursor: pointer;
  width: 33.3333%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedWrapper = styled(animated('div'))`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  div {
    padding: 20px 40px;
    width: 100%;
  }

  p, h4 {
    text-align: left;
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
`;


const AnimatedBox = styled(animated('div'))`
`;

const TeamsBox = ({team}) => {
  const [index, setIndex] = useState(null);

  const springs = useSprings(
    team.length,
    team.map((item, i) => ({
      name: item.name,
      position: item.position,
      teaser: item.teaser,
      slug: item.slug,
      background: '#3f4243',
      color: 'white',
      opacity: (index === null) | (i === index) ? 1 : 0.6,
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

  const onItemClick = i => {
    const { name, position, teaser, slug} = team[i];
    setSpringProps({
      name,
      position,
      teaser,
      slug,
      height: 400,
      width: '100%',
      opacity: 1
    });
  };

  return (
    <ComponentContainer>
      <AnimatedWrapper style={springProps}>
        <AnimatedBox>{springProps.z}</AnimatedBox>
          <div>
            <h4>
              {index !== null && team[index].name}
            </h4>
            <p>
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
          {props.name}
          </AnimatedItem>
        ))}
      </GridContainer>
    </ComponentContainer>
  );
}

export default TeamsBox;