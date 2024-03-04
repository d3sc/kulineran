import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import loginHandler from "../components/api/LoginHandler";

const LoginContexts = createContext();

const LoginProvider = ({ children }) => {
  //   const [allData, setAllData] = useState([]);
  //   const [render, setRender] = useState(true);
  //   useEffect(() => {
  //     const load = async () => {
  //       setAllData(await apiHandler.get());
  //     };
  //     load();
  //   }, [render]);

  const [isLogin, setIsLogin] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    async function checkCredential() {
      const uniqueId = localStorage.getItem("unique_id");
      const username = localStorage.getItem("username");

      if (!uniqueId && !username) return;

      const userData = await loginHandler.find(uniqueId);
      if (uniqueId == userData.data.id && username == userData.data.username) {
        setUsername(username);
        setUniqueId(uniqueId);
        setIsLogin(true);
      } else {
        setUniqueId("");
        setUsername("");
        setIsLogin(false);
      }
    }
    checkCredential();
  }, []);
  return <LoginContexts.Provider value={{ isLogin, uniqueId, username }}>{children}</LoginContexts.Provider>;
};

export const LoginContext = LoginContexts;
export default LoginProvider;
