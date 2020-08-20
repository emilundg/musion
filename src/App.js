import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';
import Main from './views/Main';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';

function App() {
    const [loggedIn,
        setLoggedIn] = useState(false);
    const isLoggedIn = () => {
        return localStorage.getItem('token') != null;
    };
    const loginCallback = (token) => {
        localStorage.setItem("token", token);
        setLoggedIn(true);
    }
    const logOut = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    }
    return (
        <Router>
            <div>
                <div className="App__Logo">
                    MUSION
                </div>
                <ul className="App__Navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {!isLoggedIn() && <li>
                        <Link to="/login">Login</Link>
                    </li>}

                    {!isLoggedIn() && <li>
                        <Link to="/signup">Signup</Link>
                    </li>}

                    {isLoggedIn() && <li>
                        <Link to="/" onClick={() => logOut()}>Logout</Link>
                    </li>
}
                </ul>

                <Switch>
                    <Route path="/login">
                        {isLoggedIn()
                            ? <Redirect to="/dashboard"/>
                            : <Login parentCallback={loginCallback}/>
}
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/dashboard">
                        {isLoggedIn()
                            ? <Dashboard/>
                            : <Redirect to="/login"/>
}
                    </Route>
                    <Route exact path="/">
                        {isLoggedIn()
                            ? <Redirect to="/dashboard"/>
                            : <Main/>}
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
