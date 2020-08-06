import React, {useState} from 'react';
import '../styles/Signup.css';
import videos from '../assets/coverr-someone-is-connecting-cables-5103.mp4';
import Axios from "axios";

function Signup() {
    // Declare a new state variable, which we'll call "count"
    const [username,
        setUsername] = useState("");
    const [password,
        setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Axios
        //     .post(`http://localhost:5000/api/users/signup?username=${username}&password=${password}`)
        //     .then((res) => {
        //         console.log(res.data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     });
        Axios.get(`http://localhost:5000/api/users/`).then(res => {
            console.log(res)
        })
        if (username && password) {}
    }

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
                    <input type="submit" className="Signup__Button" value="Signup"></input>
                </form>
            </div>
        </div>
    );
}
export default Signup;