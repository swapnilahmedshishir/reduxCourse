// constants
const GET_TODO_REQUIEST = 'GET_TODO_REQUIEST';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_ERRO = 'GET_TODO_ERRO';


// state
const initialTodoState = {
    todos:[],
    isLodding:false,
    error:null 
}
// action


// reducer 
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
// store