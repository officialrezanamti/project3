import Card from "../Card/Card";
import "./Curces.css";
import { cardInfo } from "../../API/Api";
import { useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState(cardInfo);
  return (
    <>
      <div className="main">
        <h1>Courses</h1>
        <div className="col">
          {courses.map((course) => (
            <div className="courseItem" key={course.id}>
              <Card {...course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
