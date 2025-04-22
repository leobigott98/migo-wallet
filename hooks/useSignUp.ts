import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/api';

type userObject = {
    name: string,
    lastname: string,
    phone: string,
    password: string,
    email: string
}

// Function to sign up user 
const signUp = async (userData: userObject) => {
  const response = await api.post('/auth/sign-up', userData); // Sign-up endpoint
  return response.data;
};

// Hook for signing up user
export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']}); // Refresh user data after update
    },
  });
};
