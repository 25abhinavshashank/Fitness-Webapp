import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import BodyParts from "./components/BodyParts";

function App() {
  return (
    
    <div className="font-mono w-[80%]  mx-auto">
     <Header/>
     <Hero/>
     <Search/>
     <BodyParts/>
    </div>
    
  );
}

export default App;
