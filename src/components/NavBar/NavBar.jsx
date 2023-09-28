import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="w-full flex justify-center my-10 ">
                <div className="flex gap-12 text-lg my-5 md:m-0">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Home</NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Login</NavLink>
                    <NavLink
                        to="/logout"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Logout</NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Register</NavLink>
                    <NavLink
                        to="/heroregister"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Hero Register</NavLink>
                </div>
    </div>
    );
};

export default NavBar;