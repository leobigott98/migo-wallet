import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/api';

type userObject = {
    password: string,
    email: string
}

// Function to sign up user 
const signIn = async (userData: userObject) => {
  const response = await api.post('/auth/sign-in', userData); // Sign-up endpoint
  return response.data;
};

// Hook for signing up user
export const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']}); // Refresh user data after update
    },
  });
};
