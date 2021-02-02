import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';
import { view } from '@risingstack/react-easy-state'
import state from '../store';
import { NavLink } from 'react-router-dom';




const Menu = () => {

  const item = state.items;

  return (
    <div className={state.activeMenu ? 'menu active' : 'menu'}>
      <div className='menu__content'>
        <ul>
          {item.map((items) =>
            <li>
              <NavLink activeClassName="menu-btn active-btn" to={items.href} onClick={() => {
                state.activeMenu = !state.activeMenu
              }}>{items.value}</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div >
  );
};


Menu.propTypes = {

};


export default view(Menu);
