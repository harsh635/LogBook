import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import al from "./abouts.jpg";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sTitle">ABOUT ME</span>
        <img className="sImg"
          src={al}
          alt=""
        />
        <p className="Sp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sTitle">CATEGORIES</span>
        <ul className="sList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sLitem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sTitle">FOLLOW US</span>
        <div className="sSocial">
          <i className="sIcon fab fa-facebook-square"></i>
          <i className="sIcon fab fa-twitter-square"></i>
          <i className="sIcon fab fa-pinterest-square"></i>
          <i className="sIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}