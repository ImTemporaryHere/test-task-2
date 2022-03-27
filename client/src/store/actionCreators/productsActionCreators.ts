import {Dispatch} from "redux";
import {
  IProduct,
  iProductsAction,
  ProductsActionTypes
} from "../../types/Product";
import axios from "axios";

const productsApi = 'http://localhost:5000/api/products'



export const fetchProducts = (

) => {

  console.log('fetching')

  return async (dispatch: Dispatch<iProductsAction>)=>{
    try {
      dispatch({
        type: ProductsActionTypes.SET_PRODUCTS_LOADING,
        payload: true
      })

      const response = await axios.get<IProduct[]>(productsApi)

      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      })

      dispatch({
        type: ProductsActionTypes.SET_PRODUCTS_LOADING,
        payload: false
      })

    }

    catch (e) {
      dispatch({
        type: ProductsActionTypes.SET_PRODUCTS_LOADING,
        payload: false
      });
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: `An error ${(e as Error).message } happened during products loading `
      })
    }
  }
}
