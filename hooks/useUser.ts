import { useQuery } from '@tanstack/react-query';
import api from '../api/api';

// Fetch user data
const fetchUser = async () => {
  const { data } = await api.get('/user'); // Backend endpoint
  return data;
};

// Custom hook using React Query
export const useUser = () => {
  return useQuery({
    queryKey: ['user'], // Unique key for caching
    queryFn: fetchUser, // Function to fetch user data
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
