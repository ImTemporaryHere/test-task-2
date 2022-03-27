import {iProductsAction, IProductsState, ProductsActionTypes} from "../../types/Product";

const initialState: IProductsState = {
  products: [],
  loading: false,
  error: null,
}


export const productsReducer = (state = initialState, action: iProductsAction): IProductsState => {
    switch (action.type) {

      case ProductsActionTypes.SET_PRODUCTS_LOADING: {
        return {...state,loading: action.payload}
      }

      case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS: {
        return {
          ...state,
          products: action.payload,
        }
      }


      case ProductsActionTypes.FETCH_PRODUCTS_ERROR: {
        return {
          ...state,
          error: action.payload,
        }
      }


      default : return state;


    }
}