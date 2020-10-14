import Axios from "axios"

export function fetchTasks(){
    return function(dispatch){
        Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response =>{
            console.log(response);
            dispatch({type:'FETCH_TASKS_FULFILLED', payload:response.data});
        })
        .catch(error =>{
            dispatch({type:'FETCH_TASKS_REJECTED', payload:error});
        });
    }
}

export function addTask(id, name, complete){
    return {
        type:'ADD_TASK',
        payload:{
            id,
            name,
            complete
        }
    }
}

export function getTask(id){
    return {
        type:'GET_TASK',
        payload:{
            id: id
        }
    }
}