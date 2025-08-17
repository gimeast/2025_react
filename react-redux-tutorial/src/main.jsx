import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import rootReducer from "./modules/index.js";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
