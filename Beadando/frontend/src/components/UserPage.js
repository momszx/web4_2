import React from 'react';
import UserStore from "../store/UserStore";
import YouTube from 'react-youtube';


class UserPage extends React.Component{
    render() {
        const opts = {
            width:'100%',
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div className="card-body text-center">

                <div className="card pb-5">
                    <div className="card-img-top "><YouTube videoId={UserStore._user.ytLink} opts={opts} onReady={this._onReady} /></div>
                        <div className="card-body">
                            <h5 className="card-text">Your secret video. Just because we secure as hell.</h5>
                        </div>
                </div>
                <div className={"col pb-5"}/>
                <div>
                    <div className={"row"}>
                        <div className={"col-sm"}>
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Your #ID</div>
                                <div className="card-body">
                                    <h5 className="card-title">{UserStore._user._id}</h5>
                                </div>
                            </div>
                        </div>
                        <div className={"col-sm"}>
                            <div className="card text-white bg-warning mb-3">
                                <div className="card-header">Your Name</div>
                                <div className="card-body">
                                    <h5 className="card-title">{UserStore._user.name}</h5>
                                </div>
                            </div>
                        </div>
                        <div className={"col-sm"}>
                            <div className="card text-white bg-info mb-3">
                                <div className="card-header">Your email address</div>
                                <div className="card-body">
                                    <h5 className="card-title">{UserStore._user.email}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }
}
export default UserPage