import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../src/hooks/useAuth';

export const ProtectedRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    //return isAuthenticated ? <Component /> : <Navigate to="/login" />;
    return <Component/>
};

