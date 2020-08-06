import React, {useState} from 'react';
import '../styles/Signup.css';
import videos from '../assets/coverr-someone-is-connecting-cables-5103.mp4';

function Signup() {
    // Declare a new state variable, which we'll call "count"
    const [username,
        setUsername] = useState("");
    const [password,
        setPassword] = useState("");

    return (
        <div className="Signup">
            <video className="Signup__Video" loop autoPlay>
                <source src={videos} type="video/mp4"/>
            </video>
            <div className="Signup__FormContainer">
                <p className="Signup__FormHeader">Signup</p>
                <form className="Signup__Form">
                    <div className="Signup__InputContainer">
                        <label className="Signup__Label">Username</label>
                        <input
                            type="text"
                            className="Signup__Input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="Signup__InputContainer">
                        <label className="Signup__Label">Password</label>
                        <input
                            type="text"
                            className="Signup__Input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="Signup__Button">Signup</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;