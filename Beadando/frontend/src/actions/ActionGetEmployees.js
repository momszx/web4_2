import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const ActionGetEmployees = () => {
    axios.get('/employee').then((resp) => {
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        })
    })
}