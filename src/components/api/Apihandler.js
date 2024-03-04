import axios from "axios";
const url = "http://localhost:3000/data";

const apiHandler = {
  async get() {
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => err.message);
  },
  async delete(id) {
    axios
      .delete(`${url}/${id}`)
      .then((res) => res)
      .catch((err) => err.message);
  },
  async find(id) {
    return axios
      .get(`${url}/${id}`)
      .then((res) => res)
      .catch((err) => err.message);
  },
  async edit(project) {
    return axios
      .put(`${url}/${project.id}`, project)
      .then((res) => res)
      .catch((err) => err.message);
  },
  async post(project) {
    return axios
      .post(`${url}`, project)
      .then((res) => res)
      .catch((err) => err.message);
  },
};

export default apiHandler;
