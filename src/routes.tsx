import {BrowserRouter, Route, Routes} from 'react-router-dom';
import WorkAround from "./modules/work-around/WorkAround.tsx";
import DashBoard from "./modules/dash-board/DashBoard.tsx";
import SignIn from "./modules/auth/SignIn.tsx";
import NotFound from "./shared/components/NotFound.tsx";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/work-around" element={<WorkAround/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

