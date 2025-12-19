import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import FitnessDashboard from "./components/FitnessDashboard";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    
    <div className="font-mono w-[80%]  mx-auto">
     <Header/>
     <Hero/>
     <Search/>
     <FitnessDashboard></FitnessDashboard>
     <Outlet></Outlet>
    </div>
    
  );
}

export default Home;
