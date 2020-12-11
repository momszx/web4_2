import React from 'react'
import UserStore from "../store/UserStore";
import {Link} from "react-router-dom";


class LoginButton extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            user:null
        }
        this._updateState = this._updateState.bind(this);
        this.componentDidMount = this.componentDidMount(this);
    }
    componentDidMount() {
        //UserStore.addChangeListener(this._updateState);

    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._updateState);

    }
    _updateState() {
        this.setState({user: UserStore._user});
        console.log("state")
    }

    render() {
        return (
            <div>
                {this.state.user===null ?
                    <Link to={"/login"}><a className={"btn btn-primary"}>Login</a></Link>:
                    <h2>{this.state.user.name}</h2>
                }
            </div>
        )
    }
}
export default LoginButton