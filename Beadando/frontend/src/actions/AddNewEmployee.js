import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {ActionGetEmployees} from "./ActionGetEmployees";

export const AddNewEmployee = (value) => {
    console.log(value)
    axios.post('/add',
        {
            name: value.name,
            address: value.address,
            dateOfBirth: value.dateOfBirth
        })
        .then((resp) => {
            console.log(resp)
            ActionGetEmployees();
        })
        .catch((error) => {
            console.log(error);
            dispatcher.dispatch(
                {
                    action: actionConstants.showError,
                    payload : `${error.response.status}-${error.response.statusText}: ${error.response.data.message}`
                }
            )
            }
        )
}