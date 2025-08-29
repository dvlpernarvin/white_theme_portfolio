import React from 'react';

function BodyCard({ header, skills, className }) {
    return (
        <div className={`frame ${className}`} style={{ width: '20%', height: 'unset', flex:'1 1 200px' }}>
            <div className='bodycard-content'>
                <div className=' f2 bodycard-header'>
                    {header.toUpperCase()}
                </div>
                <ul>
                    {skills?.map((sk, index) => (
                        <li key={index}>{sk}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BodyCard;