import axios from 'axios'

const API_URL = '/api/'

//Register user
const registerUser = async (userData) => {
    const response = await axios.post(API_URL + 'customer/', userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

const authService = {
    registerUser,
}

export default authService