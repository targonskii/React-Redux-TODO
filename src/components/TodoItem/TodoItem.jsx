import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
    updateTodos,
    removeTodos,
    completeTodos,
    inCompleteTodos,
} from "../../redux/reducer";

import styles from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const update = (id, value, e) => {
        if (e.key === "Enter") {
            dispatch(updateTodos({ id, item: value }));
            inputRef.current.disabled = true;
        }
    };

    const remove = (id) => {
        dispatch(removeTodos(id));
    };

    const complete = (id) => {
        dispatch(completeTodos(id));
    };

    const incomplete = (id) => {
        dispatch(inCompleteTodos(id));
    };

    return (
        <li key={item.id} className={styles.card}>
            <textarea
                ref={inputRef}
                disabled
                defaultValue={item.item}
                onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
            />
            <div className={styles.btns}>
                <button onClick={changeFocus}>✏️ Edit</button>
                {!item.completed ? (
                    <button onClick={() => complete(item.id)}>
                        ☑️ Complete
                    </button>
                ) : (
                    <button onClick={() => incomplete(item.id)}>
                        ⚠️ Incomplete
                    </button>
                )}
                <button onClick={() => remove(item.id)}>❌ Delete</button>
            </div>
            {item.completed && <span className={styles.completed}>✅</span>}
        </li>
    );
};

export default TodoItem;
