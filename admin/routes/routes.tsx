// routes.js
import React from 'react';
import { Login } from '../src/pages/Auth/Login';
import { Dashboard } from '../src/pages/Dashboard';
import { ProtectedRoute } from './ProtectedRoute';
import { NotFound } from "../src/pages/NotFound";
import { Users } from "../src/pages/Users";
import { Courses } from "../src/pages/courses/Courses";
import { Modules } from "../src/pages/Modules";
import { Course } from "../src/pages/courses/Course";
import { Permissions } from "../src/pages/permissions/Permissions";
import { Permission } from "../src/pages/permissions/Permission";
import { MainPage } from '../src/pages/Shop/MainPage';

const routes = [
    {
        path: '/',
        element: <ProtectedRoute component={Dashboard} />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path:'/shop',
        element: <MainPage/>,
    },

    {
        path: '/dashboard/*',
        element: <ProtectedRoute component={Dashboard} />,
        children: [
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'permissions',
                element: <Permissions />,
            },
            {
                path: 'add-permission',
                element: <Permission />,
            },
            {
                path: 'update-permission/:permissionId',
                element: <Permission />,
            },
            {
                path: 'courses',
                element: <Courses />,
            },
            {
                path: 'add-course',
                element: <Course />,
            },
            {
                path: 'update-course/:courseId',
                element: <Course />,
            },
            {
                path: 'modules/:courseId',
                element: <Modules />,
            },

        ],
    },
    {
        path: '*',  // Catch-all route for any undefined paths
        element: <NotFound />,  // Your component for 404 Not Found
    },
];

export default routes;
