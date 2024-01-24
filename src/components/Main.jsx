import { useState } from "react";
import { dataMakanan } from "../assets/dataMakanan.js";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./Footer.jsx";

const Main = () => {
  const [countMakanan, setCountMakanan] = useState(2);
  const [count, setCount] = useState(2);
  const url = "https://restaurant-api.dicoding.dev/list";

  const [data, setData] = useState();
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading..</p>;
  return (
    <main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="ombak">
        <path
          fill="#141416"
          fillOpacity="1"
          d="M0,96L26.7,106.7C53.3,117,107,139,160,149.3C213.3,160,267,160,320,144C373.3,128,427,96,480,74.7C533.3,53,587,43,640,74.7C693.3,107,747,181,800,181.3C853.3,181,907,107,960,96C1013.3,85,1067,139,1120,176C1173.3,213,1227,235,1280,208C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg>
      <div className="content" id="makanan">
        <h1>Makanan Yang direkomendasikan : </h1>
        <div className="food-gallery">
          {dataMakanan.slice(0, countMakanan).map((item, i) => (
            <div key={i} className="food-item">
              <img src={item.image} alt="img" width={400} />
              <div className="food-info">
                <h2 className="food-title">{item.nama}</h2>
                <h4>{item.city}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {countMakanan < dataMakanan.length && (
          <center>
            <button className="show-more" onClick={() => setCountMakanan((prev) => prev + 2)}>
              Show More
            </button>
          </center>
        )}
      </div>

      <div className="content" id="tempatMakan">
        <h1>Tempat makan Yang direkomendasikan : </h1>
        <div className="food-gallery">
          {data?.restaurants.slice(0, count).map((item, i) => (
            <div key={i} className="food-item">
              <img src={"https://restaurant-api.dicoding.dev/images/small/" + item.pictureId} alt="img" width={400} />
              <div className="food-info">
                <h2 className="food-title">{item.name}</h2>
                <h4>{item.city}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {count < data?.restaurants.length && (
          <center>
            <button className="show-more" onClick={() => setCount((prev) => prev + 2)}>
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
