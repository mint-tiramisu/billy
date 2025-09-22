import {Route, Routes} from "react-router-dom";
import Home from "../home/Home.tsx";

const DashBoardRoutes = () => (
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
);

export default DashBoardRoutes;

