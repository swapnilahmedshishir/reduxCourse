
const {createStore} = require('redux');

const initialState = {
    user : ['swapnil'],
    count : 0
}

const user_action_value = (value) => {
    return {
        type:"user_add_value",
        payload : value
    }
}

const UserReducer = (state=initialState , action) => {
    switch (action.type) {
        case "user_add_value":
            return{
                user : [...state.user, action.payload],
                count : state.count + 1
            }
        default:
            state;
            
    }
}


const store = createStore(UserReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(user_action_value('shishir'));
store.dispatch(user_action_value('ahmeed'))