import React, { useContext } from 'react';
import { UserContext } from './Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from './components/Loading';

const Middleware = ({ children }) => {
    const { loginUserInfo,loading } = useContext(UserContext);

    if(loading){
        return <Loading></Loading>
    }
    if (loginUserInfo) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default Middleware;
