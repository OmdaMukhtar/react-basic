
export default function reducer(state = {
    tasks: [], 
    error: null
}, action){
    switch (action.type) {
        case "FETCH_TASKS_PENDDING":{
            return {
                ...state, 
                tasks: action.payload
            }
        }
        case "FETCH_TASKS_FULFILLED":{
            return {
                ...state, 
                tasks: action.payload
            };
        }
        case "ADD_TASK":{
            return {
                ...state, 
                tasks: state.tasks.concat(action.payload)
            };
        }
        case "GET_TASK":{
            return {
                ...state, 
                tasks: state.tasks.find(action.payload.id)
            };
        }
        case "FETCH_TASKS_REJECTED":
            return {
                ...state, 
                error: action.payload
            };
    }

    return state;
};