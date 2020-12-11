import React from 'react'
import UserStore from "../store/UserStore";
import {Link} from "react-router-dom";
import LogoutBtn from "./LogoutBtn";


class LoginButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : ""
        }
        this.refreshUser = this.refreshUser.bind(this);
    }

    refreshUser(){
        this.setState({
            user : UserStore._user
        })
    }

    componentDidMount() {
        UserStore.addOnChangeListener(this.refreshUser);
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this.refreshUser);
    }
    render() {
        return (
            <div>
                {this.state.user === "" ?
                    <Link to={"/login"}><a className={"btn btn-primary"}>Login</a></Link>:
                    <span>
                        <Link to={"/user"}><span className={"navbar-brand"}>{this.state.user.name}</span></Link>
                        <LogoutBtn/>
                    </span>
                }
            </div>
        )
    }
}
export default LoginButton