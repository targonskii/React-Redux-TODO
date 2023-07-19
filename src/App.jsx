import DisplayTodos from "./components/DisplayTodos/DisplayTodos";
import Todos from "./components/Todos/Todos";

import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.App}>
            <h1>Todo App</h1>
            <div>
                <Todos />
                <DisplayTodos />
            </div>
        </div>
    );
};

export default App;
