import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";

const App: React.FC = () => {
  const {t, i18n} = useTranslation();

  // Check Lang
  useEffect(() => {
    const lang = localStorage.lang;
    console.log(lang);
    if (lang) i18n.changeLanguage(lang);
  }, [i18n])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:uuid" element={<Project />} />
      </Routes>
    </>
  )
}

export default App;