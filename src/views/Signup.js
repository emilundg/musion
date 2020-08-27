import React, {useState} from 'react';
import '../styles/Signup.css';
import videos from '../assets/coverr-someone-is-connecting-cables-5103.mp4';
import Axios from "axios";

function Signup({parentCallback}) {
    const [username,
        setUsername] = useState("");
    const [password,
        setPassword] = useState("");
    const [confirmPassword,
        setConfirmPassword] = useState("");
    const [errorMessage,
        setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            return setErrorMessage('username can not be blank');
        } else if (!password) {
            return setErrorMessage('password can not be blank');
        }
        const validPassword = comparePasswords();
        if (username && validPassword) {
            Axios
                .post(`http://localhost:5000/api/users/signup?username=${username}&password=${password}`)
                .then((res) => {
                    const {token} = res.data;
                    parentCallback(token);
                })
                .catch((error) => {
                    const {msg} = error.response.data;
                    setErrorMessage(msg);
                });
        } else {
            setErrorMessage("Passwords do not match");
        }
    };
    const comparePasswords = () => {
        return confirmPassword === password;
    };
    return (
        <div className="Signup">
            <video className="Signup__Video" loop autoPlay>
                <source src={videos} type="video/mp4"/>
            </video>
            <div className="Signup__FormContainer">
                <p className="Signup__FormHeader">Signup</p>
                <form className="Signup__Form" onSubmit={handleSubmit}>
                    <div className="Signup__InputContainer">
                        <label className="Signup__Label">Username</label>
                        <input
                            type="text"
                            className="Signup__Input"
                            data-cy="username"
                            value={username}
                            onFocus={() => {
                            if (errorMessage) {
                                setErrorMessage("")
                            }
                        }}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="Signup__InputContainer">
                        <label className="Signup__Label">Password</label>
                        <input
                            type="password"
                            data-cy="password"
                            className="Signup__Input"
                            value={password}
                            onFocus={() => {
                            if (errorMessage) {
                                setErrorMessage("")
                            }
                        }}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="Signup__InputContainer">
                        <label className="Signup__Label">Repeat password</label>
                        <input
                            type="password"
                            data-cy="confirm-password"
                            className="Signup__Input"
                            value={confirmPassword}
                            onFocus={() => {
                            if (errorMessage) {
                                setErrorMessage("")
                            }
                        }}
                            onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="Signup__ErrorMessage" data-cy="error-message">
                        {errorMessage}
                    </div>
                    <input
                        type="submit"
                        className="Signup__Button"
                        value="Signup"
                        data-cy="signup-button"></input>
                </form>
            </div>
        </div>
    );
}
export default Signup;