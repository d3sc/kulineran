import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./context/DataContext.jsx";
import LoginProvider from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </LoginProvider>
  </React.StrictMode>
);
