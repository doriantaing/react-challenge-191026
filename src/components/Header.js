import React from 'react';

const Header = () => {
  return(
    <header className="header">
      <div className="header-container">
        <div className="header-icon">
          <span className="header-icon_bar"/>
          <span className="header-icon_bar"/>
          <span className="header-icon_bar"/>
          <span className="header-icon_bar"/>
          <span className="header-icon_bar"/>
        </div>
        <div className="header-title">
          <h1>List <br/> discentium</h1>
        </div>
      </div>
    </header>
  )
};

export default Header;