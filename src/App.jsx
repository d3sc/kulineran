import "./App.css";
import Contact from "./components/utils/Contact";
import CreateItem from "./components/utils/CreateItem";
import Header from "./components/utils/Header";
import ItemDetail from "./components/utils/ItemDetail";
import Main from "./components/utils/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
          <Route path="/create" Component={CreateItem} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
