import axios from "axios";

const instance = axios.create({
    baseURL: 'http://3.35.133.127',
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json,",
      },
})

export default instance;