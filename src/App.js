import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/header/Banner";
import Explore from "./components/explore/Explore";
import VerifyComp from "./components/how_to/VerifyComp.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow">
        <Banner />
        <Explore />
        <VerifyComp />
      </main>

      <Footer />
    </div>
  );
}

export default App;
