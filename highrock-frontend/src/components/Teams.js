import React from "react"
import Title from "./Title"
import TeamMember from "./TeamMember"
import { Link } from "gatsby"
import { motion } from "framer-motion";

const Teams = ({team,title,showLink,list,contact,linkTo}) => {
  const [value, setValue] = React.useState(0);
  return (
    <section className="section teams section-center">
      <div className="title-margin">
        { title &&
        <Title title={title}/>
        }
        { showLink &&
        <Link to="/team" className="underline-link">
          All team
        </Link>
        }
      </div>
      <div className="teams-center">
        {
          !list &&
          <div className="btn-container">
            {team.map((item, index)=>{
              return <button 
              className={`team-btn ${index === value && 'active-btn'}`} 
              key={item.id}
              onClick={()=> setValue(index)}
              >
                {item.name}
              </button>
            })}
          </div>
        }
        {team.map((item, index)=>{
          return (
            linkTo == true ? <motion.article whileHover={{ scale: 1.05 }} className="team-info">
              <Link to={`team/${team[index].slug}`}>
                <TeamMember activeValue={value} contact={contact} key={item.id} index={index} {...team[index]} listOutAll={list}/>
              </Link>
            </motion.article>
            : 
            <div className="team-info">
              <TeamMember activeValue={value} contact={contact} key={item.id} index={index} {...team[index]} listOutAll={list}/>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Teams;
