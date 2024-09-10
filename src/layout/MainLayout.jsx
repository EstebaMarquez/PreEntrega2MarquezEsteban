import { Children } from "react";
import { NavBar } from "../components";

const MainLayout = ({children}) => {
    return(
        <div>
            <NavBar/>
            {children}
        </div>
    )
};