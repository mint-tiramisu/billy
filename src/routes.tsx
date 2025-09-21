import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components-test/About';
import NotFound from './components-test/NotFound';
import WorkAround from "./modules/work-around/WorkAround.tsx";
import DashBoard from "./modules/dash-board/DashBoard.tsx";
import SignIn from "./modules/auth/SignIn.tsx";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/work-around" element={<WorkAround/>}/>
            <Route path="dash-board" element={<DashBoard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;

