import React, { Component, ComponentType } from "react";
import { useAuth } from "../services/auth/AuthProvider";
import { Route, Navigate, RouteProps, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = (props:RouteProps) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to='/login' replace/>
    }

    return (
        <Outlet/>
    )
}

export default ProtectedRoute;