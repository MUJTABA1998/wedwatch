import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./comps/Header";
import Brands from "./comps/Brands";
import Work from "./comps/Work";
import HowWorks from "./comps/HowWorks";
import Testimonial from "./comps/Testimonial";
import WhyWedMatch from "./comps/WhyWedMatch";
import FindMatch from "./comps/FindMatch";
import Questions from "./comps/Questions";
import Photographer from "./comps/Photographer";
import Footer from "./comps/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Header />
        <Brands />
        <Work />
        <HowWorks />
        <Testimonial />
        <WhyWedMatch />
        <FindMatch />
        <Questions />
        <Photographer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
