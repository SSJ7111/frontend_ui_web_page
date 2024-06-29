import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Banner from "./components/header/Banner";
import Explore from "./components/explore/Explore";
import VerifyComp from "./components/how_to/VerifyComp.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Explore />
      <VerifyComp />
      <Footer />
    </div>
  );
}

export default App;
