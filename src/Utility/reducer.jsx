import { Type } from "./action.type";

// const [state, dispatch] = useReducer(reducer, initialState)

export const initialState = {
  basket: [],
  user: null,
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
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return { ...state, basket: updatedBasket };
      }

    case Type.REMOVE_FROM_BASKET_KEY:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return { ...state, basket: newBasket };

    case Type.EMPTY_BASKET_KEY:
      return { ...state, basket: [] };

    //for Auth
    case Type.SET_USER_KEY:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
