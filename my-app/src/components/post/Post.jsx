import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="pImg" src={PF + post.photo} alt="" />}
      <div className="pInfo">
        <div className="pCat">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="pTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="pDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="pDesc">{post.desc}</p>
    </div>
  );
}