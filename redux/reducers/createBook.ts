
import { createBookTypes } from "../types";

let initial = {
    title:'',
    author:'',
    year:''
}

export default function(state=initial, action){
    switch (action.type) {
        case createBookTypes.INPUT_CHANGE:
            let { name, event } = action.payload;
            return {
                ...state, [name]:event }

        case createBookTypes.CLEAR_VALUES:
            return {
                ...initial
            }
    
        default:
            return state;
    }
}