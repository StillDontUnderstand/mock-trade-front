import axios from 'axios';

const API_URL = 'api/';
class AuthService {
    login(user) {
        let data = new FormData();
        data.append('username', user.username);
        data.append('password', user.password);
        return axios
            .post(API_URL + "login", data, { contentType: "multipart/form-data" })
            .then(response => {
                console.debug(response.data)
                if (response.data.access_token) {
                    console.debug(response.data)
                    localStorage.setItem('token', JSON.stringify(response.data));
                    console.debug(localStorage.getItem('token'))
                }
                return response.data;
            });
    }

    logout() {
        console.debug("Logout")
        localStorage.removeItem('token');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();