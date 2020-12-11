import React , { Component } from 'react'
import {Button} from "reactstrap";
import {logoutAction} from "../actions/Login";

class LogoutBtn extends React.Component {
    handleClick = () => {
        console.log("badum tss")
        logoutAction();
    }

    render() {
        return (<Button onClick={() => this.handleClick()} className={"btn btn-danger"}>Logout</Button>);
    }
}

export default LogoutBtn