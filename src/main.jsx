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
import { AuthProvider, useAuth } from "../firebase/Auth";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Call from "./pages/Call";
import Loader from "./components/Loader";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/store" element={<Call />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </AuthProvider>
);
