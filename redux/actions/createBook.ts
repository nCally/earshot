
import { createBookTypes } from "../types";

export const onInputChange = function(name, event){
    return function(dispatch){
        dispatch({
            type:createBookTypes.INPUT_CHANGE,
            payload:{name, event}
        })
    }
}

export const clearValues = function(){
    return function(dispatch){
        dispatch({
            type:createBookTypes.CLEAR_VALUES
        })
    }
}