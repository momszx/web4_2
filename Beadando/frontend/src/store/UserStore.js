import {EventEmitter} from 'events'
import dispatcher from "../dispatcher/Dispatcher";
import {clearError, showError} from '../dispatcher/ActionConstans';

class userStore extends EventEmitter{

    _user = "";

    emitChange(){
        this.emit('Change');
    }

    addOnChangeListener(callback){
        this.addListener('Change', callback);
    }

    removeOnChangeListener(callback){
        this.removeListener('Change',callback);
    }
}
const UserStore = new userStore();
export default UserStore;

dispatcher.register(({action,payload})=>{
    console.log({action : action, payload : payload});
    if(action !== showError){
        return;
    }
    UserStore._user = payload;
    UserStore.emitChange();
});