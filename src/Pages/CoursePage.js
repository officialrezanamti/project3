import { useParams } from "react-router-dom";
import MyNav from "../Componenet/Nav/MyNav";
import { cardInfo } from "../API/Api";
import "./CoursePage.css";
export default function CoursePage() {
  let courseId = useParams().courseId;
  const courseInfo = cardInfo.find((course) => course.id == courseId);
  console.log(courseInfo);

  return (
    <>
      <MyNav />
      <div className="final">
        <img className="classImg" src={courseInfo.image} />
        <div className="finalText">
            <h1 className="courseTitle">{courseInfo.title}</h1>
            <p className="teacher"> {`Teacher: ${courseInfo.teacher}`} </p>
            <p className="courseTextInfo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel hic qui vero consequuntur fugit in quas sapiente quae dolor, tempore repellendus perferendis veniam aspernatur? Magni beatae quam optio ipsum rerum.
            Eaque nemo ipsa recusandae maiores voluptatibus qui! Facere sint totam nesciunt consequatur, tenetur sed libero nihil sapiente et vitae quidem illum, laborum a nulla, possimus non voluptatem eum ut obcaecati!
            Sed sit, voluptatum reiciendis tempora, aut similique odit tenetur est perspiciatis dignissimos temporibus. Necessitatibus veniam dolorum sequi quod? Adipisci pariatur provident nesciunt, est eius voluptatum nobis ut autem magni quis?</p>
        </div>
      </div>
    </>
  );
}
