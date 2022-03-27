import {IComment} from "./Comment";

export interface IProduct {
  "_id": string,
  "imageUrl": string,
  "name": string,
  "count": number,
  "size": {
    "width": number,
    "height": number
  },
  "weight": string,
  comments: IComment[];
}



export enum ProductsActionTypes {
  SET_PRODUCTS_LOADING = 'SET_PRODUCTS_LOADING',

  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',

  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',

}


export interface IProductsState {
  products: IProduct[];
  loading: boolean;
  error: null | string;
}

interface iSetProductsLoadingAction {
 type: ProductsActionTypes.SET_PRODUCTS_LOADING;
 payload: boolean;
}

interface iFetchProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

interface iFetchProductsErrorAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}



export type iProductsAction = iSetProductsLoadingAction |
  iFetchProductsSuccessAction |
  iFetchProductsErrorAction