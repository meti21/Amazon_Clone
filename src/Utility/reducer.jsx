import { Type } from "./action.type";

// const [state, dispatch] = useReducer(reducer, initialState)
//(action.item.id) refers id of the incoming item  and (item.id) refers existing item in the basket.
export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {


  console.log(state.basket);
  switch (action.type) {
    case Type.ADD_TO_BASKET_KEY:
      // Checks if the item is already in the basket and return a boolean
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      // If not found, it adds the item with a quantity amount: 1.
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) =>
          // to identify which specific item in the basket should have its amount increased.
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
          // splice(startIndex, deleteCount);
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
