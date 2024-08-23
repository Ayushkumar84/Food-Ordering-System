import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite Food here</h2>
            <p>"Welcome to Tomato! Satisfy your cravings with just a few clicks. Discover delicious dishes from your favorite local restaurants and have them delivered straight to your door."</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header