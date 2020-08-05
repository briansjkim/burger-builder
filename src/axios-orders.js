import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-352a1.firebaseio.com/'
});

export default instance;
