import React from "react"
import Title from "./Title"
import TeamMember from "./TeamMember"
import { Link } from "gatsby"

const Teams = ({team,title,showLink,list,contact}) => {
  const [value, setValue] = React.useState(0);
  return (
    <section className="section teams section-center">
      <div className="title-margin">
        { title &&
        <Title title={title}/>
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
            return <TeamMember activeValue={value} contact={contact} key={item.id} index={index} {...team[index]} listOutAll={list}/>
          })}
      </div>
      { showLink &&
      <Link to="/team" className="btn center-btn">
        All team
      </Link>
      }
    </section>
  );
};

export default Teams;
