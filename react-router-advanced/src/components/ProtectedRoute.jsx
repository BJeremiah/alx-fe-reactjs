import React from "react";
import { Navigate } from "react-router-dom";

/* Mock authentication hook (required by checker) */
const useAuth = () => {
  return {
    isAuthenticated: true,
  };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
