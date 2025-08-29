import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Card.css'

function Card(props) {
  let projectDet = props.details;
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/project/${props.pno}`);
  };

  return (
    <>
      {props.isPersonal && <div className='card card1'>
        <div className='p-box'>
          <div className='f2 p1'>{projectDet}
          </div>
        </div>
      </div>
      }

      {!props.isPersonal && <div className='card'>
        <div className='box'>
          <div className='f2 p1'>{projectDet}
          </div>
          <h2>{props.pno}</h2>
          <button className="view-button" onClick={handleViewClick}>
            View Details
          </button>
        </div>
      </div>}
    </>
  )
}

export default Card;