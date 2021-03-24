import axios from "axios";

const APP_ID = "605b7b74a4a2867057b3eaa3";

export const getUsers = async (amount = 10) => {
    const response = await axios.get(
        `https://dummyapi.io/data/api/user?limit=${amount}`,
        { headers: { "app-id": APP_ID } }
    );
    return response.data.data;
};
