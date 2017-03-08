/**
 * Created by PDC2B-Training.PDC2B on 3/8/2017.
 */
import dispatcher from "../dispatcher"

export  function createUser(user) {
    dispatcher.dispatch({
        type:"CREATE_USER",
        user
    })
}

export  function recieveUsers() {
    dispatcher.dispatch({
        type:"RECIEVE_USER",
        users:[{
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
    })
}