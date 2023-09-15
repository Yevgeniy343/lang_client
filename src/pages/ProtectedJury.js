import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import React from "react";

export default function ProtectedRoute({ children }) {
  const { jury } = useSelector((store) => store.jury);
  if (!jury) {
    return <Navigate to="/jury" />;
  }
  return children;
}
