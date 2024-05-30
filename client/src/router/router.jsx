import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../page/index";
import Home from "../page/home";
import Background from "../page/background";
import Contact from "../page/contact";
import About from "../page/about";
import Myself from "../page/myself";
import NotFound from "../page/notfound";
import Blog from "../page/blog";
import Main from "../page/component/main";

const Router = () => {
    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path={'/'} element={<Index/>} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/background'} element={<Background />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/myself'} element={<Myself />} />
                    <Route path={'/blog'} element={<Blog />} />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default Router;