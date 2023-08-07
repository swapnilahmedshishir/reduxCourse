// state
const initialStateCounter = {
    count: 0,
    user:[{name:'swapnil'}] 
}

// action - type , payload
const  incrementCounter = () => {
    return {
        type:'INCREMENT ',
    }
}

const decrementAction = () => {
    return { 
        type: "DECREMENT"
     };
  };

const counterReducer = (state = initialStateCounter ,action) => {
    
    switch (action.type) {
        case INCREMENT:
            
            return{
                ...state,
                count : state.count + 1 
            };
        case DECREMENT:
            
            return{
                ...state,
                count : state.count - 1
            };
        default:
            state;
    }
}
