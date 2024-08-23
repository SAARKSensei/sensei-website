import axios from "axios";

axios.defaults.baseURL = "https://sensei-app-c8da1e59e645.herokuapp.com/api";

export const getParentsDataAPI = async (phone) =>
  axios.get(`/details/parent/${phone}`);
export const getChildrenDataAPI = async (id) =>
  axios.get(`/details/children/${id}`);
