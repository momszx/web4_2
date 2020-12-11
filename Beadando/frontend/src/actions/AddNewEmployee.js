import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {ActionGetEmployees} from "./ActionGetEmployees";

export const AddNewEmployee = (value) => {
    console.log(value)
    axios.post('/employee/add',
        {
            name: value.name,
            address: value.address,
            dateOfBirth: value.dateOfBirth
        })
        .then((resp) => {
            console.log("response")
            console.log(resp)
            ActionGetEmployees();
        })
        .catch((error) => {
            console.log(error);
            dispatcher.dispatch(
                {
                    action: actionConstants.showError,
                    payload : null
                }
            )
            }
        )
}