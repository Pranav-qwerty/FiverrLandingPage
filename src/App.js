import "./App.css";
import Crowsel from "./Components/Buyers/Crowsel/Crowsel";
import FiverrBusiness from "./Components/Buyers/Fiverr Business/FiverrBusiness";
import FiverrReviews from "./Components/Buyers/Fiverr Reviews/FiverrReviews";
import Footer from "./Components/Buyers/Footer/Footer";
import Header from "./Components/Buyers/Header/Header";
import Marketplace from "./Components/Buyers/Marketplace/Marketplace";
import Items from "./Components/Buyers/Professional Services/Items";
import WhyFiverr from "./Components/Buyers/Why Fiverr/WhyFiverr";

function App() {
  return (
    <div className="App">
      <Header />
      <Crowsel />
      <div className="main-content">
        <Items />
        <WhyFiverr />
        <Marketplace />
        <FiverrBusiness />
        <FiverrReviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
