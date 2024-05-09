import Home from "./Pages/Home";
import "./App.css"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePage from "./Pages/CoursePage";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Login from "./Pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}
