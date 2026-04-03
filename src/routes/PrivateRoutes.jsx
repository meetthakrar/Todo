import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
const reg = JSON.parse(localStorage.getItem("reg")) || false;

if(!reg){
    return <Navigate to="/Registration" replace />
}
return children
}

export default PrivateRoutes