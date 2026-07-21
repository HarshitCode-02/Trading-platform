import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src='media/images/homeHero.png' alt='Hero Image' />
                <h1 className='mt-5'> Welcome to Our Company </h1>
                <p>Discover our innovative solutions and services designed to help your business thrive in the digital age. Join us on a journey of growth and success.</p>
                <button className="p-2 btn btn-primary fs-5" style={{width:'20%', margin:' 0 auto'}}> signup Now</button>
            </div>

        </div>
    );
}

export default Hero;
