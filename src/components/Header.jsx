import React from 'react';
import PropTypes from 'prop-types';
import './header.css'
import state from '../store'


const Header = () => {

  return (
    <div className={'header'}>
      <div className={'header__menu-btn'} onClick={() => state.activeMenu = !state.activeMenu}>
        <span className={'menu-btn__line'} />
      </div>
    </div>
  );
};


Header.propTypes = {

};


export default Header;
