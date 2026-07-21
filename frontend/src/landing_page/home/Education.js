import React from "react";

function Education() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="Education" className="img-fluid" style={{width: '80%'}} />
               </div>
                <div className="col-6">
                    <h2 className="mb-3" fs-2>FREE AND OPEN MARKET EDUCATION</h2>
                    <p className="lead">
                        Learn from the best in the industry with our comprehensive and free educational resources.
                    </p>
                    <a
                        style={{ textDecoration: "none" }}
                        href="https://www.facebook.com/TechFlowAI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore our Educational Resources{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <br />
                    <br />
                    <br />
                    <p className="lead">

                     Trading Q&A, the most active trading community on Facebook, is the perfect place to ask questions, share insights, and connect with fellow traders.
                    </p>
                    <a
                        style={{ textDecoration: "none" }}
                        href="https://www.facebook.com/TechFlowAI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Trading Q&A{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;