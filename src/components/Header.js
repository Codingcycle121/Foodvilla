import React from "react";
const Header= () =>
    {
        
        return  (
            <>
            <div className="header">
             <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm9yURneW64_3Ci5fRm1dsvfCIiyj2Ox8KQ&s"/>
             <div className="nav-items">
             <ul>
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact"><li>Contact</li></a>
                <a href="/cart"><li>Carts</li></a>
             </ul>
            </div>
            </div>
            </>
        )
    }
export default Header;