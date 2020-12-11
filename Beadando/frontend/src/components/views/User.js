import React from 'react'
import UserPage from "../UserPage";

export const UserView = () => {
    return (
        <div className={"container"}>
            <div className={"col pb-5"}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Your Data</h4>
                        <UserPage/>
                    </div>
                </div>
            </div>
        </div>
    )
}