import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="w-full flex justify-center my-10 ">
                <div className="flex gap-12 text-lg my-5 md:m-0">
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Login</NavLink>
                    <NavLink
                        to="/logout"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Logout</NavLink>
                </div>
    </div>
    );
};

export default NavBar;