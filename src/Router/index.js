import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
<<<<<<< Updated upstream
import SignupPage from "../pages/SignupPage";

=======
import LoginPage from "../pages/LoginPage";
>>>>>>> Stashed changes
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
<<<<<<< Updated upstream
        <Route path="/signup" element={<SignupPage/>} />
=======
        <Route path="/Login" element={<LoginPage/>} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
