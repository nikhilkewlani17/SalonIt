import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }else{
    retu
  }

  return children;
};
