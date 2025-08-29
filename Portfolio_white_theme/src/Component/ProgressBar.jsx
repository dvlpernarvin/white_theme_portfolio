import React from 'react'
import '../Styles/ProgressBar.css'

function ProgressBar(props) {
    return (
                <div className="chart--grid">
                    <div className="chart--item">
                        <div className="chart--item--inner" style={{height:props.percent}}></div>
                    </div>
                    <div className='f1'>{props.title}</div>
                    {/* <li className="chart--item chart--item--3 morph active">
                        <div className="chart--item--inner"></div>
                    </li> */}
                </div>
    )
}

export default ProgressBar;