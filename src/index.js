import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/storeConfig"
const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App></App> )
  root.render(<Provider store={store}>
    <App></App>
    </Provider>
    )
