import {EventEmitter} from 'events'
import dispatcher from "../dispatcher/Dispatcher";
import {login} from '../dispatcher/ActionConstans';

class CreateUserStore extends EventEmitter{
    _user = {}

    emitChange(){
        this.emit('Change');
    }

    addOnChangeListener(callback){
        this.addListener('Change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change',callback);
    }

}

const UserStore = new CreateUserStore();
export default UserStore;

dispatcher.register(({action,payload})=>{
    console.log({action : action, payload : payload});
    if(action !== login){
        return;
    }
    UserStore._user = payload;
    UserStore.emitChange();
});