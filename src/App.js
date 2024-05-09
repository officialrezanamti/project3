import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routess";

export default function App() {
  let routers = useRoutes(routes);
  return routers;
}
