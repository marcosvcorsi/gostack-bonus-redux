import { Reducer } from "redux";
import produce from 'immer';
import { ActionsTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  outOfStock: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case ActionsTypes.ADD_PRODUCT_TO_CART_SUCCESS:
        const { product } = action.payload;

        const productInCart = draft.items.find(item => item.product.id === product.id);

        if(productInCart) {
          productInCart.quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1
          });
        }

        break;
      case ActionsTypes.ADD_PRODUCT_TO_CART_FAILURE: 
        draft.outOfStock.push(action.payload.productId);  

        break;  
    }
  })


}

export default cart;