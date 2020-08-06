import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Main from './views/Main';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {
    return (
        <Router>
            <div>
                <ul className="App__Navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>

                <div className="App__Logo">
                    Musion
                </div>

                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
