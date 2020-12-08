import React from 'react'
import ListElement from "./ListElement";
import store from "../store/EmployeeStore";

class ListElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees : [ ]
        }
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        store.addChangeListener(this._updateState);
    }


    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({employees : store._employees});
        console.log("state")
    }

    render() {
        return(
            <div>
                {this.state.employees.map(({_id,name, address, dateOfBirth}, index)=>{
                    return(
                        <ListElement id={_id} name={name} address={address} birthData={dateOfBirth}/>
                    );
                })}
            </div>
        )
    }
}

export default ListElements