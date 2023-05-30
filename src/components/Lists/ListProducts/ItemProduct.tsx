import React, { FC } from 'react';
import ButtonOrder from './ButtonOrder';
import { foodType } from '../../../types';

interface ItemProps {
  product: foodType;
}
const ItemProduct: FC<ItemProps> = ({ product }) => {
  return (
    <div>
      <div key={product.food_id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.food_img}
            alt={product.food_img}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-lg text-gray-700">{product.food_name}</h3>
          </div>
          <p className="text-lg font-medium text-gray-900">{product.food_price}</p>
        </div>
      </div>
      <ButtonOrder product={product} />
    </div>
  );
};
export default ItemProduct;
