
import { ROLE,STATE} from "./action";



const initstate = {
   data:"",
   state:false,
   
}


export const reducer = (store= initstate,{type,payload}) => {
   console.log(store)
    switch(type){
        case ROLE:
            return({...store,data:payload})

           
                case STATE:
                    return({...store,state:payload})

       
          
           default:
               return store   
    }
}