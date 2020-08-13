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

    const loginCallback = (loginStatus) => {
        if (loginStatus === 202) {
            setLoggedIn(true);
        }
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
                    {!loggedIn
                        ? <> <li>
                            <Link to="/login">Login</Link>
                        </li> < li > <Link to="/signup">Signup</Link> < /li>
                            </ >
                        : <li>
                            <Link to="/" onClick={() => setLoggedIn(false)}>Logout</Link>
                        </li>
}
                </ul>

                <Switch>
                    <Route path="/login">
                        {loggedIn
                            ? <Redirect to="/dashboard"/>
                            : <Login parentCallback={loginCallback}/>}
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route exact path="/">
                        {loggedIn
                            ? <Redirect to="/dashboard"/>
                            : <Main/>}
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
