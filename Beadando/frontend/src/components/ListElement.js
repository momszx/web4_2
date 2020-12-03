import React , { Component } from 'react'
import {Button} from "reactstrap";


function ListElement({id, name, address, birthData}){
        return(
            <div className={"col pb-5"}>
            <div className={"card text-center"}>
                <div className={"card-header"}>
                    Employee #ID: {id}
                </div>
                <div className={"card-body"}>


                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <h5 className={"card-title"}>{name}</h5>
                            </div>
                            <div className="col-sm">
                                <p className={"card-text"}>{address}</p>
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
                    Birth date: {birthData}
                </div>
            </div>
            </div>
        );
}

export default ListElement