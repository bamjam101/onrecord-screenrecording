import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Loader from "./components/Loader";
import RecordStore from "./pages/RecordStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = "iiii";
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/store" element={<RecordStore />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </React.Suspense>
);
