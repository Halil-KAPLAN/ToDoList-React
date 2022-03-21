import { ADD_LIST, DELETE_LIST, COMPLETE_LIST, GET_LIST } from "../actions";

const INITIAL_STATE = {
    list: []
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_LIST:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case DELETE_LIST:
            return {
                ...state, list: [...state.list].filter(item => item.id !== action.payload)
            }
        case COMPLETE_LIST:
            return {
                ...state,
                list: [...state.list].map(item => item.id === action.payload ?
                    { ...item, isComplete: !item.isComplete } : item)
            }
        case GET_LIST:
            return {
                ...state,
                list: action.payload
            }

        default: return state;
    }
}