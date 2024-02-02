import React from "react";
import Navbar from "./Navbar";
import pernak from "../../assets/pernak.svg";

const Header = () => {
  return (
    <header id="home">
      <Navbar />
      <div className="gambar"></div>
      <img src={pernak} alt="" className="pernak-pernik" />
      <img src={pernak} alt="" className="pernak-pernik2" />
      <img src={pernak} alt="" className="pernak-pernik3" />
      <div className="jumbo-text">
        <h1>
          <span className="highlight-text">Taklukkan</span> Lidahmu, Jelajahi <span className="highlight-text">Dunia</span> Rasa{" "}
          <span className="highlight-text">Bersama Kulineran!</span>
        </h1>
        <h4>
          Rekomendasi makanan atau tempat makan? <span className="highlight-text">Kulineran aja!</span>
        </h4>
        <p className="subtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam dolorum voluptas quisquam blanditiis nesciunt adipisci impedit
          pariatur minima consectetur?
        </p>
      </div>
      <a href="#makanan">
        <button className="btn-lihat">Lihat Sekarang</button>
      </a>
      <div className="icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-facebook-filled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"
            strokeWidth="0"
            fill="currentColor"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-instagram"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
