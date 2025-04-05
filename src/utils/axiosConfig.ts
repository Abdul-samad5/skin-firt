
import axios from 'axios';
import { useAuthStoreAxiosState } from '../store/auth/useAuthFacade';

const instance = axios.create({
 
 
    withCredentials: true
});

instance.interceptors.request.use(
    (config: any) => {
        if (config) {
            const { accessToken, user } = useAuthStoreAxiosState();

            if (accessToken && user) {
                const userID = JSON.parse((user as any).password).id;

                config.headers["Authorization"] = `Bearer ${accessToken}`;
                config.headers["Content-Type"] = "application/json";
                // config.headers["user_id"] = userID || null;
            }

            return config;
        }

    },
    (err) => Promise.reject(err)
);

instance.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    if (error?.response !== null) {
        if (error.response.status === 403) {
            useAuthStoreAxiosState().logout();
        }
    }

    return Promise.reject(error);
});

export default instance;
