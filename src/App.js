import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';
import Main from './views/Main';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';

function App() {
    const isLoggedIn = () => {
        return localStorage.getItem('user') != null;
    };
    const loginCallback = (loginStatus) => {
        if (loginStatus === 202) {
            localStorage.setItem("user", true);
        }
    }
    const logOut = () => {
        localStorage.removeItem("user");
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
                    {!isLoggedIn()
                        ? <> <li>
                            <Link to="/login">Login</Link>
                        </li> < li > <Link to="/signup">Signup</Link> < /li>
                            </ >
                        : <li>
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
