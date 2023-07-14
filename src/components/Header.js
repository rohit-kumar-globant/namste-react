import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext)
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-green-200'>
            <div className="logo-container">
                <img className='w-56' src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li className="px-4"> <Link to='/'>Home</Link></li>
                    <li className="px-4">     <Link to='/about'>About Us</Link></li>
                    <li className="px-4"> <Link to='/contact'>Contact</Link></li>
                    <li className="px-4"> <Link to='/grocery'>Grocery</Link></li>

                    <li>Cart</li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
