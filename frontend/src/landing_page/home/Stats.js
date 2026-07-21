import React from 'react';


function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6' >
                    <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>
                        TRUST WITH CONFIDENCE
                    </h1>
                    <h3>Over 1000+ Projects Completed</h3>
                    <p>Projects Completed</p>
                    <h3>500+ Satisfied Clients</h3>
                    <p>Happy Clients</p>
                    <h3>150+ Team Members</h3>
                    <p>Expert Team</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem Image' style={{ width: '90%' }} />
                    <div className='text-center mt-3'>
                        <a
                            className='mx-5'
                            style={{ textDecoration: "none" }}
                            href='https://www.linkedin.com/company/techflow-ai/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Explore our LinkedIn <i class="fa-solid fa-arrow-right"></i>
                        </a>

                        <a
                            className='mx-5'
                            style={{ textDecoration: "none" }}
                            href='https://www.facebook.com/TechFlowAI'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Explore our Facebook <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;   