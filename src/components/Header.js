import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';

const Header = ({ handleClick}) => {

  const [input, setInput] = useState ("")
    const handelKeyDown = (e) => {
       if (e.key === 'Enter') {
        handleClick(input)
       }
    }
    return (
    <header className="header" id="header">
       <div className="container">
            <Link to="#" className="header__logo">Weather</Link>
            <div className="header__search">
              <label>  
                    <input onKeyDown={handelKeyDown} onInput={(e) => setInput(e.target.value)} type="text" className='header__inp'/> 
                </label>
              <button onClick={() => handleClick(input)} className='header__btn'>🔍︎</button>
            </div>
          <nav className="header__nav">
             <NavLink end to="/" className="header__link">Home</NavLink>
             <NavLink end to="/forecast" className="header__link">Forecast</NavLink>
          </nav>
        </div>
    </header>
    );
 
};

export default Header;