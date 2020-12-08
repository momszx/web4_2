import React from 'react'
import UserStore from "../store/UserStore";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{}
        }
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        UserStore.addChangeListener(this._updateState);
    }


    componentWillUnmount() {
        UserStore.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({user : UserStore._user});
        console.log("state")
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default UserPage