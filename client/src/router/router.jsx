import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../page/index";
import Home from "../page/home";
import Course from "../page/course";
import Contact from "../page/contact";
import About from "../page/about";
import Perso from "../page/perso";
import NotFound from "../page/notfound";
import Main from "../page/component/main";

const Router = () => {
    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path={'/'} element={<Index/>} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/course'} element={<Course />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/perso'} element={<Perso />} />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default Router;