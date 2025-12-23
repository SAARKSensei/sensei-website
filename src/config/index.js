import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getParentsDataAPI = async (phone) =>
  axios.get(`/details/parent/${phone}`);
export const getChildrenDataAPI = async (phone) =>
  axios.get(`/child-users/filter?phoneNumber=${phone}`);
