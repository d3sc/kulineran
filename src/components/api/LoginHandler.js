import axios from "axios";

const url = "http://localhost:3000/user"

const loginHandler = {
    get() {
        return axios
            .get(url)
            .then((res) => res.data)
            .catch((err) => err.message);
    },
    async find(id) {
        return axios
            .get(`${url}/${id}`)
            .then((res) => res)
            .catch((err) => err.message);
    },
}

export default loginHandler