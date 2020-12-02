import React , { Component } from 'react'
import {Button} from "reactstrap";


function ListElement({id, name, address, birthData}){
        return(
            <div className={"col"}>
            <div className="card text-center">
                <div className="card-header">
                    Employee #ID {id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className={"card-text"}>{address}</p>

                    <Button className="btn btn-danger">Delete employee</Button>
                </div>
                <div className="card-footer text-muted">
                    Birth date: {birthData}
                </div>
            </div>
            </div>
        );
}

export default ListElement