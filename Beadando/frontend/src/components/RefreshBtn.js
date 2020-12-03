import React , { Component } from 'react'
import {Button} from "reactstrap";
import {ActionGetEmployees} from "../actions/ActionGetEmployees";

class RefreshBtn extends React.Component {
    handleClick = () => {
        ActionGetEmployees();
    }

    render() {
        return ( <div><Button onClick={() => this.handleClick()} className={"btn btn-warning"}>Refresh employees</Button></div>);
    }
}
export default RefreshBtn