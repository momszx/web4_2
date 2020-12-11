import React from 'react'
import ListElement from "./ListElement";
import store from "../store/EmployeeStore";
import {ActionGetEmployees} from "../actions/ActionGetEmployees";

class ListElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
        this._updateState = this._updateState.bind(this);
        this.componentDidMount = this.componentDidMount(this);
    }

    componentDidMount() {
        store.addChangeListener(this._updateState);
        ActionGetEmployees();
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
        ActionGetEmployees();
    }

    _updateState() {
        this.setState({employees: store._employees});
        console.log("state")
    }

    render() {
        return (
            <div>
                {this.state.employees.map(({_id, name, address, dateOfBirth}, index) => {
                    return (
                        <ListElement key={_id} id={_id} name={name} address={address} birthDate={dateOfBirth}/>
                    );
                })}
            </div>
        )
    }
}

export default ListElements