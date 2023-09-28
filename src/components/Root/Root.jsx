import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-full flex justify-center">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;