import { useMutation } from 'react-query';
import { orderService } from '../services';
import { orderType } from '../types';

export const useCreateOrder = () => {
  const { mutateAsync: createOrder } = useMutation(
    'order',
    (data: orderType) => orderService.postCreateOrder(data),
    {
      onSuccess: () => {},

      onError: (error: any) => {
        alert(error);
      },
    }
  );
  return { createOrder };
};
