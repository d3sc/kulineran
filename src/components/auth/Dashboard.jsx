import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useState } from "react";

export default function Dashboard() {
  const { username } = useContext(LoginContext);
  if (!username) return "Loading..";
  return <div>Dashboard</div>;
}
