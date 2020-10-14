
export default function reducer(state = {
    users: [], 
    error: null
}, action){
    switch (action.type) {
        case "FETCH_USER_PENDDING":{
            return {
                ...state, 
                users: action.payload
            }
        }
        case "FETCH_USER_FULFILLED":{
            return {
                ...state, 
                users: action.payload.data
            };
        }
        case "ADD_TASK":{
            return {
                ...state, 
                users: state.users.concat(action.payload)
            };
        }
        case "GET_TASK":{
            return {
                ...state, 
                users: state.users.find(action.payload.id)
            };
        }
        case "FETCH_USER_REJECTED":
            return {
                ...state, 
                error: action.payload
            };
    }

    return state;
};