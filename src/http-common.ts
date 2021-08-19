import axios from "axios";

/*
* Creating axios api route
* */

export default axios.create({
    baseURL: "http://localhost:8081/api",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});
