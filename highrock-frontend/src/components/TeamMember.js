import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const TeamMember = ({name,position,image,teaser,slug,email,telephone,index,activeValue,listOutAll,deepLink,contact}) => {
  if(activeValue === index || listOutAll || deepLink){
    return <motion.article whileHover={{ scale: 1.05 }} className="team-info">
    <Link to={`team/${slug}`}>
        {/* {image && (
          <Image fluid={image.childImageSharp.fluid}/>
        )} */}
        <div className="team-image">

        </div>
        <div className="team-info-text">
          <h3>{name}</h3>
          <h4>{position}</h4>
          { teaser &&
            <p className="team-desc">{teaser}</p>
          }
        </div>
     </Link>
      {contact && 
        <div className="contact-info">
          <a className="telephone" href={`tel:${telephone}`}><FontAwesomeIcon icon={faPhone}/>
          {telephone}
          </a>
          <a className="email" href={`mailto:${email}`}><FontAwesomeIcon icon={faEnvelope}/>{email}</a>
        </div>
      }
    </motion.article>
  }else{
    return null;
  }
};

export default TeamMember;
