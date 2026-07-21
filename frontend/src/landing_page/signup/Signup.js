import React from "react";

function SignUp() {
    return (
        <div className="container mt-5">    
            <div className="row">
                <div className="col-6">
                    <h1>Sign Up</h1>
                    <p>Join us today and start your journey with us.</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
                <div className="col-6">
                    <img src="media/images/signup.png" alt="Sign Up" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default SignUp;