import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { LoginPage } from "./pages/login";
import { Signup } from "./pages/signup";
import { Private } from "./pages/private";
import { Context } from "./store/appContext";
const Layout = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token && window.location.pathname === "/private") {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <BrowserRouter basename={process.env.BASENAME || ""}>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<Private />} path="/private" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
