import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import api from '../api/api';

interface AuthContextType{
  accessToken: string | null,
  refreshToken: string | null
  isAuthenticated: boolean,
  login: (email: string, password: string)=>{},
  logout: ()=>{},
  refresh: ()=>{},
  loading: boolean
}

interface Props {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: Props) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Load tokens
  useEffect(() => {
    const loadTokens = async () => {
      const token = await SecureStore.getItemAsync('accessToken');
      const refresh = await SecureStore.getItemAsync('refreshToken');
      if (token) setAccessToken(token);
      if (refresh) setRefreshToken(refresh);
      setLoading(false);
    };
    loadTokens();
  }, []);

  // Save tokens
  const saveTokens = async (access: string, refresh: string) => {
    setAccessToken(access);
    setRefreshToken(refresh);
    await SecureStore.setItemAsync('accessToken', access);
    await SecureStore.setItemAsync('refreshToken', refresh);
  };

  // Login
  const login = async (email: string, password: string) => {
    const response = await api.post('/auth/sign-in', {email, password });

    if (response.status != 200) throw new Error('Login failed');

    await saveTokens(response.data.response.access_token, response.data.response.refresh_token);
  };

  const logout = async () => {
    setAccessToken(null);
    setRefreshToken(null);
    await SecureStore.deleteItemAsync('accessToken');
    await SecureStore.deleteItemAsync('refreshToken');
  };

  const refresh = async () => {
    if (!refreshToken) return null;

    const response = await api.post('/auth/refresh-token', {
      refresh_token: refreshToken });

    if (response.status != 200) {
      await logout();
      return null;
    }

    await saveTokens(response.data.response.access_token, response.data.response.refresh_token);
    return response.data.response.access_token;
  };

  return (
    <AuthContext.Provider value={{
      accessToken,
      refreshToken,
      isAuthenticated: !!accessToken,
      login,
      logout,
      refresh,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


/* const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
          case 'SIGN_IN':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
            };
          case 'SIGN_OUT':
            return {
              ...prevState,
              isSignout: true,
              userToken: null,
            };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  ); 

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  ); */