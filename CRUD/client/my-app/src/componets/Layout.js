import { Outlet } from "react-router-dom"
import NavbarMenu from "./Navbar"
export default function Layout(){

    return(
        <div>
        <NavbarMenu />
        <Outlet/>
        </div>
    )
}