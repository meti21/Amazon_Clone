

import {Type} from './action.type'

// const [state, dispatch] = useReducer(reducer, initialState)

export const initialState = {
    basket: []
}


export const reducer = (state,action) => {

    switch(action.type){
        case Type.ADD_TO_BASKET:
            return {

                //keep the items in the basket and add a new item
                ...state,basket:[...state.basket,action.item]
            }

        default:
          return state;
    }
}
