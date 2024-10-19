import React, { useContext } from 'react';
import { UserContext } from './Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Middleware = ({ children }) => {
    const { loginUserInfo } = useContext(UserContext);

    if (loginUserInfo) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default Middleware;
