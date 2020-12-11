import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {ActionGetEmployees} from "./ActionGetEmployees";

export const DeleteEmployee = (value) => {
    console.log(value)
    axios.delete('/employee/delete',{},
        {
            _id:value.deleteID
        })
        .then((resp) => {
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