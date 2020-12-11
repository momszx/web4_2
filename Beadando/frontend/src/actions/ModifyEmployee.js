import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {ActionGetEmployees} from "./ActionGetEmployees";

export const ModifyEmployee = (value) => {
    axios.defaults.timeout = 1500;
    axios.put('/employee/update',
        {
            _id:value.modifyID,
            data: {
                name: value.name,
                address: value.address,
                dateOfBirth: value.dateOfBirth
            }
        })
        .then((resp) => {
            console.log("was a response")
            ActionGetEmployees();
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
}