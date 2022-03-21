import React, { useState } from "react";
import { addList } from '../redux/actions'
import { useDispatch } from "react-redux";

const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        dispatch(addList(text));
        setText("");
    }
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text" className="todo-input" placeholder="Enter a name"
                onChange={e => setText(e.target.value)}
                value={text} />
            <button className="todo-button">Add</button>
        </form>
    )
}

export default TodoForm;