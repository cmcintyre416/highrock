import PropTypes from 'prop-types'
import * as React from 'react'

const BarContainer = ({ children, isFinished, animationDuration }) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
)

BarContainer.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isFinished: PropTypes.bool.isRequired,
}

export default BarContainer