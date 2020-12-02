import React , { Component } from 'react'
import ListElement from "./ListElement";

class ListElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees : [
                {id:"16181361161646", name:"Kaacsa Imre", address: "grthhatorh 14", birthData:"1988-09-10"},
                {id:"16181361161646", name:"Kaacsa Imre", address: "grthhatorh 14", birthData:"1988-09-10"},
                {id:"16181361161646", name:"Kaacsa Imre", address: "grthhatorh 14", birthData:"1988-09-10"}

            ]
        }
    }

    render() {
        return(
            <div>
                {this.state.employees.map(({id,name, address, birthData}, index)=>{
                    return(
                        <ListElement id={id} name={name} address={address} birthData={birthData}/>
                    );
                })}
            </div>
        )
    }
}

export default ListElements