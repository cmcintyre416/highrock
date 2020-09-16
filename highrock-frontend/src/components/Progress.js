import { useNProgress } from '@tanem/react-nprogress'
import PropTypes from 'prop-types'
import React from 'react'
import BarContainer from './BarContainer'
import Bar from './Bar'

const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  })

  return (
    <BarContainer isFinished={isFinished} animationDuration={animationDuration}>
      <Bar progress={progress} animationDuration={animationDuration} />
    </BarContainer>
  )
}

Progress.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
}

export default Progress