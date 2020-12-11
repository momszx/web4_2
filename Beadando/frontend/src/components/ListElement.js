import React from 'react'
import ModifyElement from "./ModifyElement";
import DeleteElement from "./DeleteElement";

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: {
                id: this.props.id,
                name: this.props.name,
                address: this.props.address,
                birthDate: this.props.birthDate
            }
        }
    }

    render() {
        return (
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
                                    <DeleteElement deleteID={this.state.element.id} name={this.state.element.name}/>
                                </div>
                                <div className="col-sm">
                                    <ModifyElement name={this.state.element.name} address={this.state.element.address}
                                                   dateOfBirth={this.state.element.birthDate}
                                                   modifyID={this.state.element.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card-footer text-muted"}>
                        Birth date: {this.state.element.birthDate}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListElement