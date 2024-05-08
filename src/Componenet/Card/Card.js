import "./Card.css";
export default function Card({ image, title, text }) {
  return (
    <>
      <div className="card">
        <img className="courcePic" src={image} />
        <h2>{title}</h2>
        <p>{text}</p>
        <button>Buy Cource</button>
      </div>
    </>
  );
}
