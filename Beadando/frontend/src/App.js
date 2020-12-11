import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {MainView} from "./components/views/Main";
import {LoginView} from "./components/views/Login";
import LoginButton from "./components/LoginButton";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <nav className="navbar navbar-light bg-light justify-content-between ">
                        <Link to={"/"}><a className="navbar-brand">Employee Lister In React</a></Link>
                        <div className="form-inline">
                            <div>
                                <LoginButton/>
                            </div>
                        </div>
                    </nav>
                    <div className={"pb-5"}/>
                    <Switch>
                        <Route exact path="/">
                            <MainView/>
                        </Route>
                        <Route path="/about">
                        </Route>
                        <Route path="/login">
                            <LoginView/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
