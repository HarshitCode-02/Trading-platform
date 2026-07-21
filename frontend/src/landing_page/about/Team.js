import React from 'react';

function Team() {
    return (
        <div className="container">
            <div className="row p-5  border-top ">
                <h1 className="text-center mt-5 ">People </h1>
            </div>

            <div className="row p-5  text-muted" style={{ lineHeight: "1.8", fontSize: "16px" }} >
                <div className="col-6 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" style={{ borderRadius: "100%", width: "60%" }} alt="nithin kamath" className="img-fluid" />
                    <h3 className="mt-3">Nithin Kamath</h3>
                    <p className="mt-3">Nithin Kamath is the founder and CEO of Zerodha.</p>
                </div>
                <div className="col-6 p-5 text-center">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>
                        Nithin is a member of the SEBI Primary Market Advisory Committee (PMAC) and the Corporate Bond and Securitised Debt Advisory Committee (CBSDAC).</p>

                    <p>

                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                        Playing basketball is his zen.
                    </p>
                </div>

            </div>
        </div>
    );
}
export default Team;      