import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./page/Main";
import Write from "./page/Write";
import NotFound from "./style/NotFound";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Router;
