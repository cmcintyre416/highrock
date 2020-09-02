import React from "react"
import Image from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"

const History = ({history}) => {
  return <AnimatePresence>
      <motion.article
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%"}}
      exit={{ opacity: 0, x: "-100%" }} 
      key={history.id} 
      className="history max-width-inner section-padding">
      { history.photo && 
        <div className="history-photo">
          <Image fluid={history.photo.childImageSharp.fluid }/>
        </div> 
      }
      <div className="history-text">
        <h4>{history.subTitle}</h4>
        <h3>{history.title}</h3>
        <p>{history.description}</p>
      </div>
    </motion.article>
  </AnimatePresence>
}

export default History
