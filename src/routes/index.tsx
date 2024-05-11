import React from 'react';
import RouteConfig from './Route';
import Home from 'pages/Home';
import DefaultLayout from 'components/Layout/DefaultLayout';
import SubmitCV from 'pages/SubmitCV';
import CallVideo from 'pages/ChatVideo';
import HeaderOnly from 'components/Layout/HeaderOnly';

interface RouterConfig {
    path: string;
    component: React.ComponentType;
    layout: React.ComponentType;
}

const publicRoutes: RouterConfig[] = [
    { path: RouteConfig.HOME, component: Home, layout: DefaultLayout },
    { path: RouteConfig.SUBMITCV, component: SubmitCV, layout: DefaultLayout },
    { path: RouteConfig.CALLVIDEO, component: CallVideo, layout: HeaderOnly },
];
const privateRoutes: RouterConfig[] = [];
export { privateRoutes, publicRoutes };
