import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    completeTodos,
    removeTodos,
    inCompleteTodos,
    updateTodos,
} from "../../redux/reducer";
import TodoItem from "../TodoItem/TodoItem";

import styles from "./DisplayTodos.module.css";

const filterTodos = (todos, filtredCondition) => {
    switch (filtredCondition) {
        case "active":
            return todos.filter((item) => !item.completed);
        case "completed":
            return todos.filter((item) => item.completed);
        case "all":
        default:
            return todos;
    }
};

const FILTERS = ["active", "completed", "all"];

const DisplayTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state);
    const [filter, setFilter] = useState("active");
    const filteredTodos = filterTodos(todos, filter);

    const removeTodo = (id) => {
        dispatch(removeTodos(id));
    };

    const updateTodo = (obj) => {
        dispatch(updateTodos(obj));
    };

    const completeTodo = (id) => {
        dispatch(completeTodos(id));
    };

    const inCompleteTodo = (id) => {
        dispatch(inCompleteTodos(id));
    };

    return (
        <div className={styles.displaytodos}>
            <div className={styles.buttons}>
                {FILTERS.map((filter) => (
                    <button key={filter} onClick={() => setFilter(filter)}>
                        {filter}
                    </button>
                ))}
            </div>
            <ul>
                {filteredTodos.length > 0
                    ? filteredTodos.map((item) => (
                          <TodoItem
                              key={item.id}
                              item={item}
                              removeTodo={removeTodo}
                              updateTodo={updateTodo}
                              completeTodo={completeTodo}
                              inCompleteTodo={inCompleteTodo}
                          />
                      ))
                    : "Задач нет"}
            </ul>
        </div>
    );
};

export default DisplayTodos;
