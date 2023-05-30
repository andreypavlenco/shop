import { useMutation } from 'react-query';
import { orderService } from '../services';

export const useFindAllOrder = () => {
  const { mutateAsync: findAllOrder } = useMutation(
    'order',
    (params: { user_id: number }) => orderService.findOrder(params.user_id),
    {
      onSuccess: () => {
        alert('User Saved Successfully');
      },

      onError: (error: any) => {
        alert(error);
      },
    }
  );
  return { findAllOrder };
};
