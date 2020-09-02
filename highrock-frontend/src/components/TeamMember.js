import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { motion } from "framer-motion";

const TeamMember = ({name,position,image,teaser,slug,index,activeValue,listOutAll,deepLink}) => {
  if(activeValue === index || listOutAll || deepLink){
    return <motion.article whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="team-info">
    <Link to={`team/${slug}`}>
        {/* {image && (
          <Image fluid={image.childImageSharp.fluid}/>
        )} */}
        <div className="team-image">

        </div>
        <div className="team-info-text">
          <h3>{name}</h3>
          <h4>{position}</h4>
          <p className="team-desc">{teaser}</p>
        </div>
     </Link>
    </motion.article>
  }else{
    return null;
  }
};

TeamMember.propTypes = {
  name:PropTypes.string.isRequired,
  position:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  teaser:PropTypes.string.isRequired,
  slug:PropTypes.string.isRequired
}

export default TeamMember;
