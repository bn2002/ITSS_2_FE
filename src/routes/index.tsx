import React from 'react';
import RouteConfig from './Route';
import Home from 'pages/Home';
import DefaultLayout from 'components/Layout/DefaultLayout';
import SubmitCV from 'pages/SubmitCV';

interface RouterConfig {
    path: string;
    component: React.ComponentType;
    layout: React.ComponentType;
}

const publicRoutes: RouterConfig[] = [
    { path: RouteConfig.HOME, component: Home, layout: DefaultLayout },
    { path: RouteConfig.SUBMITCV, component: SubmitCV, layout: DefaultLayout },
];
const privateRoutes: RouterConfig[] = [];
export { privateRoutes, publicRoutes };
