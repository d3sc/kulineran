import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiHandler from "../api/Apihandler.js";
import { DataContext } from "../../context/DataContext";
import { LoginContext } from "../../context/LoginContext.jsx";
import { useEffect } from "react";

export default function CreateItem() {
  const { allData } = useContext(DataContext);
  const formRef = useRef();
  const navigate = useNavigate();
  const { username } = useContext(LoginContext);

  if (!username) return "Loading..";

  const submit = (e) => {
    e.preventDefault();

    if (!username) return alert("Login terlebih dahulu!");
    const { [0]: name, [1]: city, [2]: description, [3]: image } = formRef.current;

    if (name.value.length < 4) return;
    if (city.value.length < 4) return;
    if (description.value.length == 0) return;
    // check name if already used
    let duplikat = false;
    allData.map((item) => {
      if (item.nama == name.value) return (duplikat = true);
    });

    if (duplikat) return alert("ada yang duplikat");

    const currentData = {};
    currentData.id = "" + (allData.length + 1);
    currentData.nama = name.value;
    currentData.city = city.value;
    currentData.image = image.value;
    currentData.desc = description.value;

    apiHandler.post(currentData);
    allData.push(currentData);
    navigate("/");
  };
  return (
    <div className="container-glass">
      <div className="item-glass">
        <div className="card-glass">
          <form className="edit-form" action="" ref={formRef}>
            <div className="input-container">
              <label htmlFor="name">food Name</label>
              <input type="text" name="name" defaultValue={""} required />
              <p>Food Name at least have 3 character or more (required)</p>
            </div>
            <div className="input-container">
              <label htmlFor="city">food city</label>
              <input type="text" name="city" required defaultValue={""} />
              <p>Food City at least have 3 character or more (required)</p>
            </div>
            <div className="input-container">
              <label htmlFor="description">food description</label>
              <textarea name="description" required defaultValue={""} />
              <p>Food desc must have character (required)</p>
            </div>
            <div className="input-container">
              <label htmlFor="image">image url </label>
              <input type="text" name="image" required defaultValue={""} />
              <p>must link from image link (required)</p>
            </div>

            <div className="input-group">
              <button className="btn-warning" onClick={submit}>
                save
              </button>
              <Link className="btn-delete" to={"/#makanan"}>
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
