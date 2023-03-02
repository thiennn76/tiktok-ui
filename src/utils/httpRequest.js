import axios from 'axios';

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3NzcyNzAzNiwiZXhwIjoxNjgwMzE5MDM2LCJuYmYiOjE2Nzc3MjcwMzYsImp0aSI6Ijl3VkN2V0Y4MjVtRUVzWksiLCJzdWIiOjUxOTgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.aoUSOxKEMrKEI2J7uHfmp9SbjmBcdXJEEpSfF1ucGkM';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const get = async (path, options = {}) => {
    const result = await httpRequest.get(path, options);
    return result.data;
};

export default httpRequest;
