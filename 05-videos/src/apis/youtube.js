import axios from "axios";

const KEY = "AIzaSyCN7uv8CJfXqs1_8ZTJPxT0d-23MUBxyr4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: `${KEY}`
    }
});
