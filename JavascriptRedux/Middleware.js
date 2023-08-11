const {createStore , combineReducers, applyMiddleware}= require('redux');
const { default: logger } = require('redux-logger');
// product type
const GET_PRODUCT = "Get_Product";
const ADD_PRODUCT = 'Add_Product';

// product initial state
const initialPoductState = {
    product : ['pen','pencil'],
    productNumber : 2
}

// Get and Add Product 
const getProduct = () => {
   return{
    type:GET_PRODUCT
   } 
}

const addProduct = (product) => {
    return{
     type:ADD_PRODUCT,
     payload:product
    } 
 }


//   reducer in Product 
 const ProductReducer = (state=initialPoductState , action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return{
                ...state
            }
        case ADD_PRODUCT:
            return{
                product:[...state.product, action.payload],
                productNumber: state.productNumber + 1 
            }
    
        default:
           return state;
    }
 }
 

// reducer reqire item in redux
 const store = createStore(ProductReducer , applyMiddleware(logger));
 store.subscribe(()=> {
    console.log(store.getState());
 });

 store.dispatch(getProduct())
 store.dispatch(addProduct('clock'))
 store.dispatch(addProduct('t-sirt'))
 
 