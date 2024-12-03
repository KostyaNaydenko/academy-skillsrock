// routes.js
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import Courses from "../pages/courses/Courses";
import Modules from "../pages/Modules";
import Course from "../pages/courses/Course";
import Permissions from "../pages/permissions/Permissions";
import Permission from "../pages/permissions/Permission";
import {MainBlogComponent} from '../pages/blog/MainPage.js';
import { NavigateButton } from '../pages/blog/NavigateBlog.js';

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
        path: '/blog',
        element: <MainBlogComponent />
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
            {
                path: 'blog',
                element: <NavigateButton />,
            },

        ],
    },
    {
        path: '*',  // Catch-all route for any undefined paths
        element: <NotFound />,  // Your component for 404 Not Found
    },
];

export default routes;
