import axios from "axios";

const http = axios.create({
    url: "/api",
    baseURL: "/api",
    headers: {
        "Content-type": "application/json"
    }
});

const cleanup = () => {
    console.log("cleanup");
};


export default http;