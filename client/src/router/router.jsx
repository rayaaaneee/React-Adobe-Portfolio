import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../Main";
import AppRoutes from "./app.routes";
import { ManageBody } from "../object/manage-body";

const Router = () => {
    
    ManageBody.setPageNames(AppRoutes.map(route => route.name));

    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    { AppRoutes.map(({ path, name, element }) => (
                        <Route key={name} path={path} element={element} />
                    )) }
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default Router;