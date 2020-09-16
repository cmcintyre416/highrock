import React, { useState, useRef } from 'react';
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring';
import styled from "styled-components";

const ServicesContainer = styled.div`

.row {
  display: flex;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex: 1 1 auto;
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 980px) {
    width: 33.33333333333333%;
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  border-radius: 4px;
  transition: box-shadow 0.5s;
  will-change: transform;

  .gatsby-image-wrapper {
    width: auto;
    min-width: 150px;
  }
}

.card-title {
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}

.card-body {
  margin-top: 27px;
  margin-bottom: 27px;
  line-height: 1.5;
  font-size: 16px;
  text-align: center;
  min-height: 125px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
}

.ratio {
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
}

.ratio-inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
`;


const Service = ({data}) => {
  return (
    <ServicesContainer>
      <div className="container">
        <div className="row">
          {data.map((card, i) => (
            <div key={i} className="column">
              <Link to={`services/${card.slug}`}>
                <Card>
                  <div className="card-title">{card.title}</div>
                  <div className="card-body">{card.description}</div>
                  <Image fluid={card.icon.childImageSharp.fluid}/>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ServicesContainer>
  );
}

const Card = ({ children }) => {
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 200; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.04 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        zIndex: isHovered ? 2 : 1,
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}


export default Service;