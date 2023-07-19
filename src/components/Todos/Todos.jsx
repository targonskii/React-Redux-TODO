import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/reducer";

import styles from "./Todos.module.css";

const Todos = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === "") {
            setError("Write anything!!!");
        } else {
            dispatch(
                addTodos({
                    id: crypto.randomUUID(),
                    item: todo,
                    completed: false,
                })
            );
            setTodo("");
            setError("");
        }
    };

    return (
        <div className={styles.addTodos}>
            <input
                type="text"
                onChange={handleChange}
                className={styles.todoInput}
                value={todo}
            />
            <button className={styles.addBtn} onClick={add}>
                Add todo
            </button>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default Todos;
