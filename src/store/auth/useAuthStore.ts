import { createWithEqualityFn } from 'zustand/traditional';
import { InitialStateProps } from './interfaces';
import * as SecureStore from 'expo-secure-store';
import AxiosConfig from '../../utils/axiosConfig';

const initialState: InitialStateProps = {
    user: null,
    loading: false,
    error: null,
    success: false,
    accessToken: null,
    login: () => {},
    register: () => {},
    resetStore: () => {},
    logout: () => {}
};

const useAuthStore = createWithEqualityFn<InitialStateProps>()((set) => {
   
    const getAccessToken = async () => {
        const token = await SecureStore.getItemAsync('accessToken');
        return token ? token : null;
    };

   
    const getUser = async () => {
        const user = await SecureStore.getItemAsync('user');
        return user ? JSON.parse(user) : null;
    };

    // Initialize state with existing access token and user data
    getAccessToken().then((initialAccessToken) => {
        set((state) => ({ ...state, accessToken: initialAccessToken }));
    });

    getUser().then((userData) => {
        set((state) => ({ ...state, user: userData }));
    });

    return {
        ...initialState,

        // Function to reset the store state
        resetStore: () => {
            set((state) => ({ ...state, loading: false, success: false, error: null }));
        },

        // Function to handle user login
        login: async ({ email, password }) => {
            set((state) => ({ ...state, loading: true }));

            AxiosConfig.post('users/login', { email, password })
                .then(async (loginResponse) => {
                    const userData = loginResponse.data;
                    console.log(userData.token);
                 //   await SecureStore.setItemAsync('user', JSON.stringify(userData.user));
                    await SecureStore.setItemAsync('accessToken', userData.token);

                    set((state) => ({
                        ...state,
                        error: null,
                        success: true,
                      //  user: userData.user,
                        accessToken: userData.token
                    }));
                })
                .catch((errorResponse) => {
                    set((state) => ({
                        ...state,
                        success: false,
                        error: errorResponse?.response?.data?.message || errorResponse.message
                    }));
                })
                .finally(() => {
                    set((state) => ({ ...state, loading: false }));
                });
        },

        // Function to handle user registration
        register: async ({ first_name,username, last_name, email, password }) => {
            set((state) => ({ ...state, loading: true }));

            AxiosConfig.post('users/register', {
                first_name,
                username,
                last_name,
                email,
                password
            })
                .then(() => {
                    set((state) => ({ ...state, error: null, success: true }));
                })
                .catch((errorResponse) => {
                    set((state) => ({
                        ...state,
                        success: false,
                        error: errorResponse.response?.data?.message || errorResponse.message
                    }));
                })
                .finally(() => {
                    set((state) => ({ ...state, loading: false }));
                });
        },

        // Function to handle user logout
        logout: async () => {
            await SecureStore.deleteItemAsync('user');
            await SecureStore.deleteItemAsync('accessToken');

            set(initialState);
        }
    };
});

export default useAuthStore;
