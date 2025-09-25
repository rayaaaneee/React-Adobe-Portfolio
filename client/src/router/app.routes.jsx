import Index from "../page/index";
import Home from "../page/home";
import Background from "../page/background";
import Contact from "../page/contact";
import About from "../page/about";
import Myself from "../page/myself";
import Blog from "../page/blog";
import NotFound from "../page/notfound";

export const AppRoutes = Object.freeze([
    { path: '/', name: "index", element: <Index /> },
    { path: '/home', name: "home", element: <Home /> },
    { path: '/background', name: "background", element: <Background /> },
    { path: '/contact', name: "contact", element: <Contact /> },
    { path: '/about', name: "about", element: <About /> },
    { path: '/myself', name: "myself", element: <Myself /> },
    { path: '/blog', name: "blog", element: <Blog /> },
    { path: '*', name: "not-found", element: <NotFound /> }
]);

export default AppRoutes;