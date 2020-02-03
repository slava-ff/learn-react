import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7dbca4e6a3a497ea27f9d683725512ec2284ba9de3a51050bec0037a54490a17'
    }
});