

import {Type} from './action.type'

// const [state, dispatch] = useReducer(reducer, initialState)

export const initialState = {
    basket: []
}


export const reducer = (state,action) => {

    switch (action.type) {
      case Type.ADD_TO_BASKET_KEY:
        //Type.ADD_TO_BASKET_KEY = ADD_TO_BASKET from action.type.js
        return {
          //keep the items in the basket and add a new item
          ...state,
          basket: [...state.basket, action.item],  //action.item= {image,title,id,rating,price,description} from productcard.jsx
        };

      default:
        return state;
    }
}
