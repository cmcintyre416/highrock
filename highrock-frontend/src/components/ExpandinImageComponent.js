import React, { useState } from "react";
import Image from "gatsby-image"
import { Link } from "gatsby"
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
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    border-radius: 4px;
    overflow: hidden;
    height: 550px;
    margin-bottom: 20px;

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

        @media(max-width: 778px){
            width: 100%;
            height: auto;
            justify-content: flex-start;
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
    height: 550px;

        &:after {
            content: '';    
            position: absolute;
            height: 4px;
            background: linear-gradient(135deg, #e78f19 0%, #fda085 100%);
            left: 0px;
            right: 0px;
            bottom: -3px;
        }

        @media(max-width: 778px){
            width: 100%;
            height: auto;

            &:after {
                display: none;
            }
        }
    `;
    

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

    @media(max-width: 778px){
       display: none;
    }
`;

const TextWrapper = styled(animated(Flex))`
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  background: 'white';
  font-size: 16px;

  @media(max-width: 778px){
    height: 100% !important;
 }
`;


const AnimatedBox = styled(animated(Box))`
    cursor: initial;

    h3 {
        text-transform: uppercase;
        font-family: 'Nunito', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }

    a {
        text-decoration: underline;
        cursor: pointor;
    }

    @media(max-width: 778px){
        opacity: 1 !important;
        transfrorm:translate(0px);
        padding: 40px;
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
                    <Link to={info[i].urls}>
                        <h3>
                            {info[i].title}
                        </h3>
                    </Link>
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