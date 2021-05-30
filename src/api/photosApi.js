import axiosClient from "./axiosClient";
import queryString from "query-string";
const photosApi = {
    getAll: (params) => {
        let paramsString = "";
        if(params)
        {
            if(params && params.categoryId === 0 ){
                delete params.categoryId;
            }
            paramsString = queryString.stringify(params)
        }
        const url = `/photos?${paramsString}`;
        return axiosClient.get(url);
    },
    getById: (id) => {
        const url = `/photos/${id}`;
        return axiosClient.get(url);
    },
    postPhoto: (params) => {
        const url = '/photos';
        return axiosClient.post(url, params);
    },
    putPhoto: (params) => {
        const url = `/photos/${params.id}`
        return axiosClient.put(url,params);
    },
    delPhoto: (params) => {
        const url = `/photos/${params.id}`;
        return axiosClient.delete(url,params);
    }
};
export default photosApi