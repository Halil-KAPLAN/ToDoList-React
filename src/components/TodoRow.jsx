import React from 'react'
import { FaTrashAlt } from "react-icons/fa"
import { deleteList, setComplete } from '../redux/actions'
import { useDispatch } from "react-redux";
import clsx from "clsx";

const TodoRow = ({ item }) => {
  const dispatch = useDispatch();
  const rowStyle = clsx({
    "todo-row": true,
    "todo-completed": item.isComplete
  });

  return (
    <div className={rowStyle}>
      <input type="checkbox" checked={item.isComplete} onChange={(e) => { dispatch(setComplete(item)) }}></input>
      <div >{item.name}</div>
      <div className='todo-icons'>
        <FaTrashAlt className='todo-icon' onClick={() => { dispatch(deleteList(item.id)) }}></FaTrashAlt>
      </div>
    </div>
  )
}

export default TodoRow;