/**
 * Created by PDC2B-Training.PDC2B on 3/8/2017.
 */
import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class UserStore extends EventEmitter{
    constructor(){
        super();
        this.users = [{
            name:"abc",
            email:"abc@xyz.com",
            dtae:"01-03-2017",
            active:true
        },
            {
                name:"def",
                email:"def@xyz.com",
                dtae:"02-03-2017",
                active:true
            }]
    }
    getUsers(){
        return this.users;
    }
    addUser(user){
        this.users.push(user);
        this.emit('change')
    }
    handleActions(action){ // Action Payload (Action type, data
        //create user and retrive user
        switch(action.type){
            case "CREATE_USER":{
                this.addUSer(action.user);
                break;
            }
            case "RECIEVE_USER":{
                this.user = action.users;
                this.emit("change");
                break;
            }
        }
    }
}
const userStore = new UserStore();
//registering the userstore with dispatcher
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
