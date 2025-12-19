import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="font-bold flex justify-between max-w-screen text-3xl mt-4 sticky top-0 bg-white shadow-[0_6px_6px_-4px_rgba(0,0,0,0.15)]">
              <NavLink to="/">
              <img src={"https://static.vecteezy.com/system/resources/thumbnails/045/021/439/small_2x/hand-drawn-black-and-white-cartoon-strong-arm-flexing-bicep-png.png"} alt="logo" className=" width-[50px] size-12.5"/>

              
              </NavLink>
              <NavLink to="/"><h1>HOME</h1></NavLink>
             <NavLink to="/exercises"><h1 >EXERCISES</h1></NavLink> 
        </div>
    )
}