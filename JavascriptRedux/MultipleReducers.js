const {createStore ,combineReducers} = require('redux');
// product type
const GET_PRODUCT = "Get_Product";
const ADD_PRODUCT = 'Add_Product';
// card type
const GET_CARD_ITEM = "GET_CARD_ITEM";
const ADD_CARD_ITEM = 'ADD_CARD_ITEM';
// product initial state
const initialPoductState = {
    product : ['pen','pencil'],
    productNumber : 2
}
// Card initial state
const initialCardState = {
    cardItem : ['sugar','milk'],
    cardItemNumber : 2
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

// Card item get and add 
 const getCardItem = () => {
    return{
     type:GET_CARD_ITEM
    } 
 }
 
 const addCardItem = (product) => {
     return{
      type:ADD_CARD_ITEM,
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
 
//   reducer in Card item 
const CardReducer = (state=initialCardState , action) => {
    switch (action.type) {
        case GET_CARD_ITEM:
            return{
                ...state
            }
        case ADD_CARD_ITEM:
            return{
                cardItem:[...state.cardItem, action.payload],
                cardItemNumber: state.cardItemNumber + 1 
            }
    
        default:
           return state;
    }
 }
const rootReducer = combineReducers({
    productR: ProductReducer,
    cardR: CardReducer
})


// reducer reqire item in redux
 const store = createStore(rootReducer);
 store.subscribe(()=> {
    console.log(store.getState());
 });

 store.dispatch(getProduct())
 store.dispatch(addProduct('clock'))
 store.dispatch(addProduct('t-sirt'))


 store.dispatch(getCardItem())
 store.dispatch(addCardItem('egg'))
 store.dispatch(addCardItem('rich'))
 
 