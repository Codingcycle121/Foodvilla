import React from "react";
import { Link } from "react-router-dom";
const Header= () =>
    {
        
        return  (
            <>
            <div className="header">
             <Link to='/' ><img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm9yURneW64_3Ci5fRm1dsvfCIiyj2Ox8KQ&s"/></Link>
             <div className="nav-items">
             <ul>
                <Link className="item" to="/"><li>Home</li></Link>
                <Link className="item" to="/about"><li>About</li></Link>
                <Link className="item" to="/contact"><li>Contact</li></Link>
                <Link className="item" to="/cart"><li>Carts</li></Link>
             </ul>
            </div>
            </div>
            </>
        )
    }
export default Header;