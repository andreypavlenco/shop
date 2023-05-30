import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Link: FC = () => {
  return (
    <nav className="w-max ml-20 mt-5 text-xl">
      <div className="flex justify-centre">
        <div>
          <ul className="flex flex-nowrap space-x-8">
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/shop-card">Shopping Card</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Link;
