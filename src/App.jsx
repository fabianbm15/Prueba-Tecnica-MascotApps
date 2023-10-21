import { useState } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Notifications from "./components/Notifications";
import PromoteApp from "./components/PromoteApp";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <div className="app">
          <Banner />
          <Info />
          <Faq />
          <Contact />
          <Notifications />
          <PromoteApp />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
