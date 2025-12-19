import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout(){
    return (
        <div  className='font-mono w-[80%]  mx-auto'>
        <Header></Header>
         <main className="flex-grow">
        <Outlet />
         </main>
        <Footer></Footer>
        </div>
    )
}