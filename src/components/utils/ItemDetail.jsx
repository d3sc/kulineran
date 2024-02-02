import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiHandler from "../api/Apihandler";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiHandler.find(id).then((response) => setData(response.data));
  }, []);

  if (!data) return <p>Loading..</p>;
  return (
    <div className="container-glass">
      <div className="item-glass">
        <div className="card-glass">
          <img src={data.image} alt="img" style={{ width: "450px" }} />
          <div className="food-info">
            <h2 className="food-title">{data.nama}</h2>
            <h5>{data.city}</h5>
            <p>{data.desc}</p>
          </div>
          <div className="back-detail">
            <Link className="btn-delete" to={"/#makanan"}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
