import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';
import Main from './views/Main';
import Login from './views/Login';
import Signup from './views/Signup';

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
                <ul className="App__Navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {!loggedIn
                        ? <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Signup</Link>
                                </li>
                            </>
                        : <li>
                            <Link to="/" onClick={() => setLoggedIn(false)}>Logout</Link>
                        </li>
}
                </ul>

                <div className="App__Logo">
                    Musion
                </div>

                <Switch>
                    <Route path="/login">
                        {loggedIn
                            ? <Redirect to="/dashboard"/>
                            : <Login parentCallback={loginCallback}/>}
                    </Route>
                    <Route path="/signup">
                        <Signup/>
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
