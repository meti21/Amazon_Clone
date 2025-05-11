import { Type } from "./action.type";

// const [state, dispatch] = useReducer(reducer, initialState)

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    //Type.ADD_TO_BASKET_KEY = ADD_TO_BASKET from action.type.js
    case Type.ADD_TO_BASKET_KEY:
      //check if the item exists existing item will return true(here basket is array so we can use .find)
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => (
           item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ));
        return { ...state, basket: updatedBasket };
      }

    default:
      return state;
  }
};
