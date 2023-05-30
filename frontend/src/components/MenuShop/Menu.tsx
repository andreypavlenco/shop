import React, { FC } from 'react';
import Button from './Button';

interface MenuProps {
  pizzaDayOn(): void;
  kfcOn(): void;
  iqPizzaOn(): void;
}

const Menu: FC<MenuProps> = ({ pizzaDayOn, kfcOn, iqPizzaOn }) => {
  return (
    <div className="ml-10  border-2 w-96 rounded-s-md ">
      <div>
        <ul className="space-y-6 flex flex-col text-lg pl-6 ">
          <li>
            <Button onClick={() => pizzaDayOn()} value="PizzaDay" />
          </li>
          <li>
            <Button onClick={() => iqPizzaOn()} value="IQPizza" />
          </li>
          <li>
            <Button onClick={() => kfcOn()} value="KFC" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
