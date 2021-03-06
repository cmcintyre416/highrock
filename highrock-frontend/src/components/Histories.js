import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import History from "../components/History"
import Title from "./title"

const query = graphql`
  {
    allStrapiHistories {
      nodes {
        id
        title
        subTitle
        description
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Histories = () => {
  const data = useStaticQuery(query);
  const [activeHistory, setActiveHistory] = React.useState(0);
  const {
    allStrapiHistories: { nodes: histories },
  } = data;

  useEffect(() => {
    const timer = setTimeout(()=> {
      if(activeHistory < (histories.length - 1)){
        setActiveHistory(activeHistory + 1)
      }else{
        setActiveHistory(0);
      }
    },15000);
    return () => clearTimeout(timer);
  });

  let currentHistory = histories[activeHistory];

  return <div className="histories">
    <div className="history-title">
      <Title title="history"/><span className="control-panel-counter">{activeHistory + 1} / {histories.length}</span><span>- </span><h4>{currentHistory.subTitle}</h4>
    </div>
    <div className="histories-container">
      <div className="next" onClick={() => {
        if(activeHistory < (histories.length - 1)){
          setActiveHistory(activeHistory + 1);
        }else{
          setActiveHistory(0);
        }
      }}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => {
        if(activeHistory > 0){
          setActiveHistory(activeHistory - 1);
        }else{
          setActiveHistory(histories.length - 1);
        }
      }}>
        {"‣"}
      </div>
      <History history={currentHistory}/>
    </div>
    <div className="control-panel">
      {histories.map((history, index) => <button onClick={()=> setActiveHistory(index)} className={`control-circle ${index === activeHistory ? 'active' : ''}`} key={index}><span className="control-panel-tag">{history.subTitle}</span></button>)}
    </div>
  </div>
}

export default Histories
