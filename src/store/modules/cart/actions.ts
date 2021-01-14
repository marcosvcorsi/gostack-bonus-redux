import { IProduct } from "./types";

export const ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART_REQUEST';

export const ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS';

export const ADD_PRODUCT_TO_CART_FAILURE = 'ADD_PRODUCT_TO_CART_FAILURE';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_SUCCESS,
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ADD_PRODUCT_TO_CART_FAILURE,
    payload: {
      productId
    }
  }
}