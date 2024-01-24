import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
