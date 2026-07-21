import React from "react";

function Pricing() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">

                {/* Left Side */}
                <div className="col-md-5">
                    <h1 className="mb-3">UNBEATABLE PRICING</h1>

                    <p>
                        We offer the best prices in the market, with no hidden fees or
                        charges. Our pricing is transparent and competitive, ensuring that
                        you get the best value for your money.
                    </p>

                    <a
                        style={{ textDecoration: "none" }}
                        href="https://www.facebook.com/TechFlowAI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore our Pricing{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                {/* Right Side */}
                <div className="col-md-7">
                    <div className="row text-center">
                        <div className="col-md-6 border">
                            <h1>$0</h1>
                            <p>
                                Free equity delivery and free mutual funds delivery to the demat
                                account
                            </p>
                        </div>

                        <div className="col-md-6 border">
                            <h1>$20</h1>
                            <p>
                                Free equity delivery and free mutual funds delivery to the demat
                                account
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;