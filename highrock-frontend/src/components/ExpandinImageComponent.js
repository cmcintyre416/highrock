import React, { useState } from "react";
import Image from "gatsby-image"
import { animated, useSprings } from "react-spring";

import styled from "styled-components";

import { Box } from "./ui/atoms/box";
import { Flex } from "./ui/atoms/flex";

const GridContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;

const AnimatedItemOuter = styled(animated(Flex))`
    cursor: pointer;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 48%;
    cursor: pointer;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    border-radius: 4px;
    overflow: hidden;

        .gatsby-image-wrapper {
            position: absolute;
            min-width: 100%;
            min-height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            right: 0;
            z-index: -1;
        }
    `;
    
    const AnimatedItem = styled(animated(Flex))`
    width: 100%;
    cursor: pointer;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

        &:after {
            content: '';    
            position: absolute;
            height: 4px;
            background: linear-gradient(135deg, #e78f19 0%, #fda085 100%);
            left: 0px;
            right: 0px;
            bottom: -3px;
        }
    `;
    
    AnimatedItemOuter.defaultProps = {
        height: [400, null, 550]
    };
    
    AnimatedItem.defaultProps = {
        height: [400, null, 550]
    };

const TitleWrapper = styled(animated(Flex))`
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    font-size: 18px;
    padding: 20px;
    letter-spacing: 2px;
    position: absolute;
    top: 0;
    left: 0;
`;

const TextWrapper = styled(animated(Flex))`
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  background: 'white';
  font-size: 16px;
`;


const AnimatedBox = styled(animated(Box))`
    h3 {
        text-transform: uppercase;
        font-family: 'Nunito', sans-serif;
        font-weight: 500;
        font-size: 16px;
    }
`;
AnimatedBox.defaultProps = {};

const ExpandingImageComponent = ({info}) => {
  const [index, setIndex] = useState(null);
  const [isDelayed, setIsDelayed] = useState(true);

  const springs = useSprings(
    info.length,
    info.map((item, i) => ({
      delay: isDelayed ? 250 * i : 0,
      opacity: 1,
      transform: "translateY(0px)",
      overlayOpacity: i === index ? 0 : 1,
      textOpacity: i === index ? 1 : 0,
      textHeight: i === index ? "100%" : "0%",
      from: {
        opacity: 0,
        transform: "translateY(100px)",
        overlayOpacity: 1,
        textOpacity: 0,
        textHeight: "0%"
      }
    }))
  );

  return (
        <GridContainer>
        {springs.map(
            (
            { opacity, transform, overlayOpacity, textOpacity, textHeight },
            i
            ) => (
            <AnimatedItemOuter
                onClick={() => {
                setIndex(i);
                setIsDelayed(false);
                }}
                key={i}
            >
                <AnimatedItem style={{ opacity, transform }}
                >
                { info[i].icon ?
                    <Image fluid={info[i].icon.childImageSharp.fluid}/>
                    :
                    <Image fluid={info[i].image.childImageSharp.fluid}/>
                }
                <TitleWrapper style={{ opacity: overlayOpacity }}>
                    {info[i].title}
                </TitleWrapper>
                </AnimatedItem>
                <TextWrapper style={{ height: textHeight }}>
                <AnimatedBox style={{ opacity: textOpacity }} p={2}>
                    <h3>
                        {info[i].title}
                    </h3>
                    {info[i].description}
                </AnimatedBox>
                </TextWrapper>
            </AnimatedItemOuter>
            )
        )}
        </GridContainer>
  );
}

export default ExpandingImageComponent;