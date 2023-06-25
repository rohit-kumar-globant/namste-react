import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className='header'>
            <div className="logo-container">
                <img className='logo' src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li> <Link to='/'>Home</Link></li>
                    <li>     <Link to='/about'>About Us</Link></li>
                    <li> <Link to='/contact'>Contact</Link></li>
                    <li> <Link to='/grocery'>Grocery</Link></li>

                    <li>Cart</li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
