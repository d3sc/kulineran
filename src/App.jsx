import { useEffect } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Contact from "./components/utils/Contact";
import CreateItem from "./components/utils/CreateItem";
import Header from "./components/utils/Header";
import ItemDetail from "./components/utils/ItemDetail";
import Main from "./components/utils/Main";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/auth/Logout";
import Dashboard from "./components/auth/Dashboard";
import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";

function App() {
  const localUsername = localStorage.getItem("username");
  const { username } = useContext(LoginContext);
  return (
    <>
      <Router>
        <Routes>
          <Route
            index
            element={
              <>
                <Header /> <Main />
              </>
            }
          />
          <Route path="/contact" Component={Contact} />
          <Route path="/item/:id" Component={ItemDetail} />
          <Route path="/create" element={username ? <CreateItem /> : <Navigate to={"/"} />} />
          <Route path="/login" element={username ? <Navigate to={"/"} /> : <Login />} />
          <Route path="/logout" element={username ? <Logout /> : <Navigate to={"/login"} />} />
          <Route path="/dashboard" element={username ? <Dashboard /> : <Navigate to={"/login"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
