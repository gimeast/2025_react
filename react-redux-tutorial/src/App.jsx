import "./App.css";
import CounterContainer from "./containers/CounterContainer.jsx";
import TodosContainer from "./containers/TodosContainer.jsx";

function App() {
    return (
        <>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </>
    );
}

export default App;
