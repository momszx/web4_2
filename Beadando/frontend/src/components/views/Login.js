import React  from 'react'
import {LoginElement} from "../LoginElement";

export const LoginView = () => {
    return(
        <div className={"container"}>
            <div className={"col pb-5"}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Login</h4>
                        <LoginElement/>
                    </div>
                </div>
            </div>
        </div>
    )
}