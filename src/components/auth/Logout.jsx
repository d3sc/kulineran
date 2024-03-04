import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

export default function Logout() {
  const navigate = useNavigate();
  // check
  const { username } = useContext(LoginContext);
  if (!username) return "Loading..";
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      window.location.reload();
      navigate("/");
    }, 3000);
  }, []);
  return <div>anda akan logout..</div>;
}
