import Card from "../Card/Card";
import "./Curces.css";
import { cardInfo } from "../../API/Api";
import { useState } from "react";

export default function Cources() {
  const [cources, setCources] = useState(cardInfo);
  return (
    <>
      <div className="main">
        <h1>Cources</h1>
        <div className="col">
          {cources.map((cource) => (
            <div className="courseItem" key={cource.id}>
              <Card {...cource} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
