import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const loginAction = (value) => {
    axios.post('/user',
        {
            email: value.email,
            password: value.password
        })
        .then((resp) => {
            dispatcher.dispatch({
                action: actionConstants.login,
                payload:resp.data
            })
        })
        .catch((error) => {
                console.log(error);
                dispatcher.dispatch(
                    {
                        action: actionConstants.showError,
                        payload: null
                    }
                )
            }
        )
};

export const logoutAction = () => {
    dispatcher.dispatch(
        {
            action: actionConstants.logout,
            payload: null
        }
    )
};