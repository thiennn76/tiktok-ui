import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const result = await httpRequest.get(path, options);
    return result.data;
};

export default httpRequest;
