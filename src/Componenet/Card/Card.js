import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ id , image, title, text }) {
  return (
    <>
      <div className="card">
        <img className="coursePic" src={image} />
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="btn">
          <Link to = {`/course/${id}`} >
          <button>Buy Course</button>
          </Link>
        </div>
      </div>
    </>
  );
}
