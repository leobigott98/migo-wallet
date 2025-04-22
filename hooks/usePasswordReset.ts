import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

type userObject = {
    email: string
}

// Function to sign up user 
const passwordReset = async (userData: userObject) => {
  const response = await axios.post('http://192.168.100.167:4000/auth/request-password-reset', userData); // Sign-up endpoint
  return response.data;
};

// Hook for signing up user
export const usePasswordReset = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: passwordReset,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']}); // Refresh user data after update
    },
  });
};
