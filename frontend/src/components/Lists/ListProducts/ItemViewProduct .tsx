import React, { FC } from 'react';
import ItemProduct from './ItemProduct';
import { foodType } from '../../../types';
import { iqPizza, kfc, pizzaDay } from '../../../data';

interface ItemViewProductProps {
  storeOne: boolean;
  storeTwo: boolean;
  storeTree: boolean;
}

const ItemViewProduct: FC<ItemViewProductProps> = ({ storeOne, storeTwo, storeTree }) => {
  return (
    <div className="mt-6 grid space-x-5 w-max grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {storeOne && Array.isArray(pizzaDay) ? (
        pizzaDay.map((product: foodType, id: number) => <ItemProduct key={id} product={product} />)
      ) : (
        <></>
      )}

      {storeTwo && Array.isArray(iqPizza) ? (
        iqPizza.map((product: foodType, id: number) => <ItemProduct key={id} product={product} />)
      ) : (
        <></>
      )}

      {storeTree && Array.isArray(kfc) ? (
        kfc?.map((product: foodType, id: number) => <ItemProduct key={id} product={product} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemViewProduct;
