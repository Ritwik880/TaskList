import React, { useState } from 'react';

//library import
import { useNavigate } from 'react-router-dom';

const Login = () => {

    //Managing State for User Login 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newEntry, setNewEntry] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArray = [{
            email: email,
            password: password
        }];
        setNewEntry([...newEntry, newArray]);
        localStorage.setItem('user', newArray);
        console.log(newArray);
        setEmail("");
        setPassword("");
        navigate("/editTask");
    };
    return (
        <>
            <section className="landing-section">
                <div className="row container">
                    <div className="landing-form">
                        <h6 className="landing-head">Mobile First</h6>
                        <h2 className="landing-sub-head">Continue Your Progress</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="email" className="form-control form-input" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <input type="password" className="form-control form-input" id="exampleInputPassword1"
                                    aria-describedby="emailHelp" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <button className="form-reset-btn" type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login