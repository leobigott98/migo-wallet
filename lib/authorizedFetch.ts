// lib/authorizedFetch.js
import { useAuth } from '../context/AuthContext';

export const useAuthorizedFetch = () => {
  const auth = useAuth();
  const accessToken = auth?.accessToken
  const refresh = auth?.refresh
  const logout = auth?.logout

  const fetchWithAuth = async (url: string, options = {}) => {
    let token = accessToken;
    let response = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 401) {
      const newToken = await refresh();
      if (!newToken) throw new Error("Session expired");

      response = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${newToken}`
        }
      });
    }

    return response;
  };

  return fetchWithAuth;
};
