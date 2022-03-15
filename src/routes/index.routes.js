import { PATHS } from 'configs/routes.config';
import { AboutPage, HomePage, NotFoundPage, UserPage } from 'pages';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRtoutes } from './public.routes';

export function AppRouting() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRtoutes/>}>
                    <Route path={PATHS.HOME} element={<HomePage/> } />
                    <Route path={PATHS.ABOUT} element={<AboutPage/> } />
                    <Route path={PATHS.USER_DETAILS} element={<UserPage/> } />
                    <Route path={PATHS.PAGE404} element={<NotFoundPage/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

