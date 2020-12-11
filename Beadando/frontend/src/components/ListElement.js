import React from 'react'
import {Button} from "reactstrap";

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: {
                id : this.props.id,
                name : this.props.name,
                address: this.props.address,
                birthData: this.props.birthData
            }
        }
    }

    render() {
        return(
            <div className={"col pb-5"}>
                <div className={"card text-center"}>
                    <div className={"card-header"}>
                        Employee #ID: {this.state.element.id}
                    </div>
                    <div className={"card-body"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h5 className={"card-title"}>{this.state.element.name}</h5>
                                </div>
                                <div className="col-sm">
                                    <p className={"card-text"}>{this.state.element.address}</p>
                                </div>
                                <div className="col-sm">
                                    <Button className={"btn btn-danger"}>Delete employee</Button>
                                </div>
                                <div className="col-sm">
                                    <Button className={"btn btn-success"}>Modify employee</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card-footer text-muted"}>
                        Birth date: {this.state.element.birthData}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListElement