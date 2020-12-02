import {EventEmitter} from 'events'
import dispatcher from "../dispatcher/Dispatcher";
import {refresh} from '../dispatcher/ActionConstans';

class EmployeeStore extends EventEmitter {
    _employees = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.addListener('Change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change',callback);
    }
}

const store = new EmployeeStore();
export default store;

dispatcher.register(({action,payload})=>{
    if(action !== refresh ) return;
    store._employees = payload;
    store.emitChange();
})