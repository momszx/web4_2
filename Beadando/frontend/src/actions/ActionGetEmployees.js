import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const ActionGetEmployees = () => {
    axios.defaults.timeout = 1500;
    axios.get('/employee').then((resp) => {
        dispatcher.dispatch({
            action: actionConstants.refresh,
            payload: resp.data
        })
    })
}