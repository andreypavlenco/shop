import { useMutation } from 'react-query';
import { userService } from '../services';
import { userType } from '../types';

export const useFindUser = () => {
  const { mutateAsync: findOneUser } = useMutation(
    'user',
    (data: userType) => userService.findUser(data),
    {
      onSuccess: () => {},

      onError: (error: any) => {
        alert(error);
      },
    }
  );
  return { findOneUser };
};
