import React, {useState} from 'react';
import '../styles/Login.css';
import videos from '../assets/coverr-someone-is-connecting-cables-5103.mp4';
import Axios from "axios";

const Login = ({parentCallback}) => {
    // Declare a new state variable, which we'll call "count"
    const [username,
        setUsername] = useState("");
    const [password,
        setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (username && password) {
            Axios
                .post(`http://localhost:5000/api/users/Login?username=${username}&password=${password}`)
                .then((res) => {
                    console.log(res)
                    parentCallback(res.status);
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    return (
        <div className="Login">
            <video className="Login__Video" loop autoPlay>
                <source src={videos} type="video/mp4"/>
            </video>
            <div className="Login__FormContainer">
                <p className="Login__FormHeader" data-cy="greeting">Login</p>
                <form className="Login__Form" onSubmit={handleSubmit}>
                    <div className="Login__InputContainer">
                        <label className="Login__Label">Username</label>
                        <input
                            type="text"
                            className="Login__Input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="Login__InputContainer">
                        <label className="Login__Label">Password</label>
                        <input
                            type="password"
                            className="Login__Input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" className="Login__Button" value="Login"></input>
                </form>
            </div>
        </div>
    );
}
export default Login;