import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

type userObject = {
    email: string
}

// Function to sign up user 
const sendOTP = async (userData: userObject) => {
  const response = await axios.post('http://192.168.100.167:3005/auth/resend-otp', userData); // Sign-up endpoint
  return response.data;
};

// Hook for signing up user
export const useSendOTP = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendOTP,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']}); // Refresh user data after update
    },
  });
};