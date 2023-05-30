import React, { FC } from 'react';
import { iqPizzaOn, kfcOn, pizzaDayOn } from '../store/menuSlice';
import { useDispatch } from 'react-redux';
import Menu from '../components/MenuShop/Menu';
import ListProducts from '../components/Lists/ListProducts/ListProducts';

const Shop: FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex space-x-24 w-max ">
        <div className="mt-16">
          <Menu
            pizzaDayOn={() => dispatch(pizzaDayOn())}
            iqPizzaOn={() => dispatch(iqPizzaOn())}
            kfcOn={() => dispatch(kfcOn())}
          />
        </div>
        <ListProducts />
      </div>
    </div>
  );
};

export default Shop;
