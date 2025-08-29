/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { MdVerified } from 'react-icons/md';
import { certificates } from '../store/data';

function Certificates() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [error, setError] = useState('');

    const handleClick = (src) => {
        const img = new Image();
        img.onload = () => {
            setCurrentImage(src);
            setShowPopup(true);
            setError('');
        };
        img.onerror = () => {
            setError('Certificate not found!');
        };
        img.src = src;
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleCertificateClick = (pdfLink) => {
        window.open(pdfLink, '_blank');
    };

    return (
        <div className='dp certificates' style={{ 
            position: 'relative', 
            overflowY: 'auto', 
            maxHeight: '100vh', 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
        }}>
            <style>
                {`
                    .dp.certificates::-webkit-scrollbar {
                        display: none;
                    }
                    .certificate-container {
                        display: flex;
                        gap: 2rem;
                        align-items: center;
                        padding: 1rem;
                        transition: transform 0.3s ease;
                    }
                    .certificate-container:hover {
                        transform: translateY(-5px);
                    }
                    .certificate-image {
                        flex: 1;
                        max-width: 300px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        border-radius: 0.5rem;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .certificate-image:hover {
                        transform: scale(1.05);
                        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
                    }
                    .certificate-details {
                        flex: 1.5;
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        gap: 0.75rem;
                    }
                    .certificate-details h3 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #2d3748;
                        margin: 0;
                        transition: color 0.3s ease;
                    }
                    .certificate-details p {
                        margin: 0;
                        line-height: 1.5;
                        color: #4a5568;
                        transition: color 0.3s ease;
                    }
                    .certificate-details strong {
                        color: #2d3748;
                        font-weight: 600;
                        margin-right: 0.5rem;
                    }
                    .verify-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 0.5rem;
                        color: #0066cc;
                        text-decoration: none;
                        margin-top: 1rem;
                        padding: 0.5rem 1rem;
                        border-radius: 0.5rem;
                        background-color: rgba(0, 102, 204, 0.1);
                        transition: all 0.3s ease;
                    }
                    .verify-link:hover {
                        background-color: rgba(0, 102, 204, 0.2);
                        transform: translateY(-2px);
                    }
                    .vertical-timeline-element {
                        transition: all 0.3s ease;
                    }
                    .vertical-timeline-element:hover {
                        transform: scale(1.02);
                    }
                    .popup {
                        animation: fadeIn 0.3s ease;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    .vertical-timeline-element-icon {
                        transition: all 0.3s ease;
                    }
                    .vertical-timeline-element:hover .vertical-timeline-element-icon {
                        transform: scale(1.1);
                    }
                `}
            </style>
            <VerticalTimeline lineColor='#d2e3d2'>
                {certificates.map((cert, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element--work'
                        contentStyle={{ 
                            color: '#000000', 
                            borderRadius: '1rem', 
                            boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', 
                            background: '#e6e6e6', 
                            padding: '1rem',
                            transition: 'all 0.3s ease'
                        }}
                        contentArrowStyle={{ 
                            borderRight: '7px solid #e6e6e6',
                            transition: 'all 0.3s ease'
                        }}
                        iconStyle={{ 
                            background: '#e6e6e6', 
                            color: 'darkcyan', 
                            boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff',
                            transition: 'all 0.3s ease'
                        }}
                        icon={<MdVerified size={24} />}
                    >
                        <div className="certificate-container">
                            <div className="certificate-image" onClick={() => handleCertificateClick(cert.pdfLink)}>
                                <img src={cert.image} alt={cert.title} style={{ width: '100%', borderRadius: '0.5rem' }} />
                            </div>
                            <div className="certificate-details">
                                <h3 className='vertical-timeline-element-title'>{cert.title}</h3>
                                <p><strong>Issuer:</strong> {cert.issuer}</p>
                                <p><strong>Date:</strong> {cert.date}</p>
                                <p>{cert.description}</p>
                                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="verify-link">
                                    Verify Certificate <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {showPopup && (
                <div className='popup' onClick={closePopup} style={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    backdropFilter: 'blur(5px)', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    animation: 'fadeIn 0.3s ease'
                }}>
                    <img src={currentImage} alt='Certificate' style={{ 
                        maxHeight: '80%', 
                        maxWidth: '80%', 
                        borderRadius: '1rem',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease'
                    }} />
                </div>
            )}
        </div>
    );
}

export default Certificates;
