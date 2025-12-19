import Hero from "./components/Hero";
import Search from "./components/Search";
import FitnessDashboard from "./components/FitnessDashboard";
import { Outlet } from "react-router-dom";
import Slider from "./components/Slider";

function Home() {
  return (
    
    <div >
    
     <Hero/>
     <Search/>
     <FitnessDashboard></FitnessDashboard>
      <Slider></Slider>
     <Outlet></Outlet>
    </div>
    
  );
}

export default Home;
