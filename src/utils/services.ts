import axios from "axios";
import * as SecureStore from "expo-secure-store";
export const baseUrl = "http://192.168.43.80:5000/api";
// export const baseUrl = "https://paivia.onrender.com/api";

const getAuthToken = async () => {
  try {
    // Retrieve the stored user object as a string
    const userString = await SecureStore.getItemAsync("User");

    if (userString) {
      // Parse the string to convert it back to an object
      const user = JSON.parse(userString);

      // Return the token from the user object
      return user.token;
    } else {
      console.log("No user found in SecureStore");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving token from SecureStore:", error);
    return null;
  }
};

// Post Request
export const postRequest = async (url: string, body: any) => {
  try {
    const token = await getAuthToken();
    console.log(token, "get");
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error: any) {
    return {
      error: true,
      message: error.response?.data?.message || error.message,
    };
  }
};

// Get Request
export const getRequest = async (url: string) => {
  try {
    const token = await getAuthToken();
    const response = await axios.get(url, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error: any) {
    return {
      error: true,
      message: error.response?.data?.message || error.message,
    };
  }
};

// Put Request
export const putRequest = async (url: string, body: any) => {
  try {
    const token = await getAuthToken();
    const response = await axios.put(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error: any) {
    return {
      error: true,
      message: error.response?.data?.message || error.message,
    };
  }
};
