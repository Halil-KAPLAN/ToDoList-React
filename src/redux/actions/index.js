import axios from "axios";

export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const COMPLETE_LIST = "COMPLETE_LIST";
export const GET_LIST = "GET_LIST";

export const addList = text => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, { name: text, isComplete: false }).then((response) => {
            dispatch({ type: ADD_LIST, payload: response.data });
        }).catch((e) => console.log(e))
    }
}

export const deleteList = id => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((_response) => {
            dispatch({ type: DELETE_LIST, payload: id });
        }).catch((e) => console.log(e))
    }
}

export const setComplete = item => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${item.id}`, { ...item, isComplete: !item.isComplete }).then((_response) => {
            dispatch({ type: COMPLETE_LIST, payload: item.id });
        }).catch((e) => console.log(e))
    }
}

export const getList = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((response) => {
            dispatch({ type: GET_LIST, payload: response.data });
        }).catch((e) => console.log(e))
    }
}