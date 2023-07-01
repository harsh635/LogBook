import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="Icons fab fa-facebook-square"></i>
        <i className="Icons fab fa-twitter-square"></i>
        <i className="Icons fab fa-pinterest-square"></i>
        <i className="Icons fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="List">
          <li className="item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="item" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/Setting">
            <img className="image" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="List">
            <li className="item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="Search fas fa-search"></i>
      </div>
    </div>
  );
}