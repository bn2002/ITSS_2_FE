import DefaultLayout from "components/Layout/DefaultLayout";
import HeaderOnly from "components/Layout/HeaderOnly";
import CallVideo from "pages/ChatVideo";
import DetailJob from "pages/DetailJob";
import Home from "pages/Home";
import React from "react";
import RouteConfig from "./Route";
import Recruitment from "pages/Recruitment";

interface RouterConfig {
    path: string;
    component: React.ComponentType;
    layout: React.ComponentType;
}

const publicRoutes: RouterConfig[] = [
    { path: RouteConfig.HOME, component: Home, layout: DefaultLayout },
    { path: RouteConfig.CALLVIDEO, component: CallVideo, layout: HeaderOnly },
    { path: RouteConfig.DETAIL_JOBS, component: DetailJob, layout: DefaultLayout },
    { path: RouteConfig.APPLIED_JOBS, component: Recruitment, layout: DefaultLayout },
];
const privateRoutes: RouterConfig[] = [];
export { privateRoutes, publicRoutes };
