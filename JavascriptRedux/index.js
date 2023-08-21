const {createStore} = require("redux");

// constant declear 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// initial value decler
const initialState = {
    count: 0   
};
// action value
const incrementCounter = () => {
  return  {
        type:INCREMENT
    }
};

const decrementCounter = () => {
   return {
        type:DECREMENT
    }
};

const restCounte = () => {
 return   {
        type : RESET
    }
};

// reducer declear
const counterReducer = (state = initialState , action) => {
            switch (action.type) {
                case INCREMENT:
                    return{
                        ...state,
                        count : state.count +1  
                    }
                   
                case DECREMENT:
                        return{
                            ...state,
                            count : state.count - 1  
                        }
                case RESET:
                    return{
                        ...state,
                        count : 0  
                    }
                default:
                    state;
            }
}

// store create 
const store = createStore(counterReducer);

// store declear
store.subscribe(() => {
    console.log(store.getState());
})

// action dispatch
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(restCounte());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());