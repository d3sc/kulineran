import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/Apihandler";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ItemCard({ item, deleteHandling }) {
  const [isEdit, setIsEdit] = useState(false);
  const { allData, setAllData } = useContext(DataContext);
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const { [0]: id, [1]: name, [2]: city, [3]: description, [4]: image } = formRef.current;

    if (name.value.length < 4) return alert("Name required");
    if (description.value.length == 0) return alert("desc required");
    if (image.value.length <= 100 && image.value.length > 0) return alert("image must link");

    const currentData = {};
    !image.value ? (currentData.image = item.image) : (currentData.image = image.value);
    currentData.id = id.id;
    currentData.nama = name.value;
    currentData.city = city.value;
    currentData.desc = description.value;

    apiHandler.edit(currentData);
    setIsEdit(false);
    setAllData(allData.map((p) => (p.id == currentData.id ? currentData : p)));
  };
  return (
    <div data-aos="fade-up">
      {!isEdit ? (
        <div className="food-item">
          <img src={item.image} alt="img" width={400} />
          <div className="food-info">
            <Link to={"item/" + item.id}>
              <h2 className="food-title">{item.nama}</h2>
            </Link>
            <h5>{item.city}</h5>
            <p>{item.desc.substring(0, 50) + "..."}</p>
            <div className="input-group">
              <button className="btn-warning" onClick={() => setIsEdit(!isEdit)}>
                edit
              </button>
              <button className="btn-delete" onClick={() => (confirm("are you sure?") ? deleteHandling(item.id) : null)}>
                delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="food-item">
          <form className="edit-form" action="" ref={formRef}>
            <div className="input-container">
              <input type="hidden" id={item.id} />
              <label htmlFor="name">food Name*</label>
              <input type="text" name="name" defaultValue={item.nama} required />
            </div>
            <div className="input-container">
              <label htmlFor="city">food city*</label>
              <input type="text" name="city" required defaultValue={item.city} />
            </div>
            <div className="input-container">
              <label htmlFor="description">food description*</label>
              <textarea name="description" required defaultValue={item.desc} />
            </div>
            <div className="input-container">
              <label htmlFor="image">food image</label>
              <input type="text" name="image" defaultValue={""} />
              <p>*must image url</p>
            </div>

            <div className="input-group">
              <button className="btn-warning" onClick={submit}>
                save
              </button>
              <button className="btn-delete" onClick={() => setIsEdit(false)}>
                cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
