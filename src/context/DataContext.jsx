import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import apiHandler from "../components/api/Apihandler";

const DataContexts = createContext();

const DataProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [render, setRender] = useState(true);
  useEffect(() => {
    const load = async () => {
      setAllData(await apiHandler.get());
    };
    load();
  }, [render]);
  return <DataContext.Provider value={{ allData, setAllData, render, setRender }}>{children}</DataContext.Provider>;
};

export const DataContext = DataContexts;
export default DataProvider;
