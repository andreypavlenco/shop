import { useMutation } from 'react-query';
import { userService } from '../services';
import { userType } from '../types';

export const useCreateUser = () => {
  const { mutateAsync: createUser } = useMutation(
    'user',
    (data: userType) => userService.postCreateUser(data),
    {
      onSuccess: () => {
        alert('User Saved Successfully');
      },

      onError: (error: any) => {
        alert(error);
      },
    }
  );
  return { createUser };
};
