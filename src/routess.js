import { Children } from "react";
import CoursePage from "./Pages/CoursePage";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const routes = [
    {path : '/' , element : <Home />},
    {path : '/about' , element : <About />},
    {path : '/article' , element : <Article />},
    {path : '/login' , element : <Login />},
    {path : '/course/:courseId' , element : <CoursePage /> , Children : [
        {path : 'js', element : <h1>hello</h1>}
    ]},
    



]

export default routes;