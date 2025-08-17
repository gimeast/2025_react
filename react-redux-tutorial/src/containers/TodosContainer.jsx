import { changeInput, insert, remove, toggle } from "../modules/todos.js";
import { useSelector } from "react-redux";
import Todos from "../components/Todos.jsx";
import useActions from "../lib/useActions.js";
import React from "react";

const TodosContainer = () => {
    const input = useSelector((state) => state.todos.input);
    const todos = useSelector((state) => state.todos.todos);

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default React.memo(TodosContainer);
