import axiosClient from "./axiosClient";

const todoApi = {
    getAll : () => {
        const url = "/tasks"
        return axiosClient.get(url);
    },
    postTask : (params) => {
        const url = "/tasks";
        return axiosClient.post(url,params)
    }
}

export default todoApi;