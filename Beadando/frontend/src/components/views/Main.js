import React from 'react'
import {AddElement} from "../AddElement";
import ListElements from "../ListElements";
import DeleteElement from "../DeleteElement";
import RefreshBtn from "../RefreshBtn";

export const MainView = () => {
    return (
        <div className={"container"}>
            <div className={"col pb-5"}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add New Employee</h4>
                        <AddElement/>
                    </div>
                </div>
            </div>
            <div className={"col pb-5"}>
                <div className="card">
                    <div className="card-body">
                        <div className={"row"}>
                            <div className={"col"}>
                                <h4 className="card-title">List Of Employees</h4>
                            </div>
                            <div className={"col pull-right"}>
                                <RefreshBtn/>
                            </div>
                            <div className={"pb-5"}/>
                        </div>
                        <ListElements/>
                    </div>
                </div>
            </div>
        </div>
    )
}