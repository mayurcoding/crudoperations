import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Context
import UserContextProvider from "./Context/UserContextProvider.jsx";

//Redux
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContextProvider>
  </StrictMode>
);
