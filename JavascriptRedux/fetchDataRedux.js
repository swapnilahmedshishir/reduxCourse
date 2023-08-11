// import or required
const { default: axios } = require('axios');
const {createStore , applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default;

// constants

const GET_TODO_REQUIEST = 'GET_TODO_REQUIEST';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_ERRO = 'GET_TODO_ERRO';
const API_URL = "https://jsonplaceholder.typicode.com/todos";


// state
const initialTodoState = {
    todos:[],
    isLodding:false,
    erro:null 
}
// action 
const getTodoRequiest = () => {
    return {
        type: GET_TODO_REQUIEST
    }
}
const getTodoSuccess = (todos) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: todos
    }
}
const getTodoErro = (erro) => {
    return {
        type: GET_TODO_ERRO,
        payload:erro
    }
}

// reducer
const useReducer = (state=initialTodoState , action) => {
    switch (action.type) {
        case GET_TODO_REQUIEST:
            return{
                ...state,
                isLodding:true
            }   
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLodding:false,
                todos: action.payload
            }
        case GET_TODO_ERRO:
            return {
                ...state,
                isLodding:false,
                erro:action.payload
            }
    
        default:
            return state;
    }
}
// data fetching  async action create 
const fetchDate = () => {
    return (dispatch) => {
        dispatch(getTodoRequiest());
           axios.get(API_URL)
           .then(res => {
               const data = res.data;
               const title = data.map( res => res.title);
               dispatch(getTodoSuccess(title));
           } )
           .catch (erro => {
               const erroMeassage = erro.message;
               dispatch(getTodoErro(erroMeassage)) ;

            
            })
      }
}


// store
const store = createStore(
    useReducer,
    applyMiddleware(thunk)
  );

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchDate());