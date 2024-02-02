import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer.jsx";
import apiHandler from "../api/Apihandler.jsx";
import ItemCard from "./ItemCard.jsx";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const { setRender, render, allData, setAllData } = useContext(DataContext);
  const [countMakanan, setCountMakanan] = useState(2);

  const deleteHandling = async (id) => {
    setAllData(allData.filter((data) => data.id != id));
    await apiHandler.delete(id);
  };

  return (
    <main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="ombak">
        <path
          fill="#141416"
          fillOpacity="1"
          d="M0,96L26.7,106.7C53.3,117,107,139,160,149.3C213.3,160,267,160,320,144C373.3,128,427,96,480,74.7C533.3,53,587,43,640,74.7C693.3,107,747,181,800,181.3C853.3,181,907,107,960,96C1013.3,85,1067,139,1120,176C1173.3,213,1227,235,1280,208C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg>
      <div className="content" id="makanan">
        <div className="header-makanan">
          <h1>Makanan Yang direkomendasikan : </h1>
          <button className="btn-warning tambah-makan" onClick={() => navigate("/create")}>
            tambah makanan
          </button>
        </div>
        <div className="food-gallery">
          {allData
            ?.sort((a, b) => b.id - a.id)
            .slice(0, countMakanan)
            .map((item, i) => (
              <ItemCard key={i} item={item} deleteHandling={deleteHandling} />
            ))}
        </div>
        {countMakanan < allData.length && (
          <center>
            <button className="show-more" onClick={() => setCountMakanan((prev) => prev + 2)}>
              Show More
            </button>
          </center>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Main;
