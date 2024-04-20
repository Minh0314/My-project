import axiosClient from "./axiosCLient";

const fetchTaskApi = {
  fetchTask: () => {
    const url = `/tasks`;
    return axiosClient.get(url);
  },
};


export default fetchTaskApi;
