import React, { useEffect } from 'react'
import TodoRow from './TodoRow'
import { useDispatch, useSelector } from "react-redux";
import { getList } from '../redux/actions';

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getList())
    }, [dispatch]);

    const list = useSelector((state) => state.list);
    return (
        <div className="todo-list" >
            {
                list && list.map(item => (
                    <TodoRow item={item} key={item.id}></TodoRow>
                ))
            }
        </div>
    )
}

export default TodoList;