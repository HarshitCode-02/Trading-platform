import React from 'react';

function Awards() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <div className="col-6 p-5">
                    <img src='media/images/largestBroker.svg' alt='Awards Image' />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1 className='mt-5'> Our Awards </h1>
                    <p>We are proud to be recognized for our commitment to excellence and innovation. Our awards reflect our dedication to delivering outstanding solutions and services to our clients.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Best Financial</li>
                                <li>Top Trading Platform</li>
                                <li>Customer Award</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li> Services Provider</li>
                                <li> Trading Platform</li>
                                <li>Satisfaction Award</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='Press Logos Images' style={{width: '90%'}} />
                </div>
            </div>
        </div>



    );
};
export default Awards;