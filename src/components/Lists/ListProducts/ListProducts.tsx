import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ItemViewProduct from './ItemViewProduct ';

const ListProducts: FC = () => {
  const kfcState = useSelector((state: RootState) => state.menu.kfc);
  const pizzaDayState = useSelector((state: RootState) => state.menu.pizzaDay);
  const iqPizzaState = useSelector((state: RootState) => state.menu.iqPizza);

  return (
    <div className="bg-white">
      <div className="mx-auto space-x-5 max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Menu</h2>
        <ItemViewProduct storeOne={pizzaDayState} storeTwo={iqPizzaState} storeTree={kfcState} />
      </div>
    </div>
  );
};

export default ListProducts;
