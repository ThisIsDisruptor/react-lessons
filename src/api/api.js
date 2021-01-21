import * as axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "API-KEY": "184c66c7-8543-4e1f-ac49-3368e415c804",
  },
});

//userAPI
const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

const unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`).then((response) => response.data);
};

const followUser = (userId) => {
  return instance.post(`follow/${userId}`).then((response) => response.data);
};

export const usersAPI = {
  getUsers,
  followUser,
  unfollowUser,
};

//profile API
const getProfileInfo = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => response.data);
};

const getStatus = (userId) => {
  return instance
    .get(`profile/status/${userId}`)
    .then((response) => response.data);
};

const updateStatus = (statusString) => {
  return instance
    .put(`profile/status`, { status: statusString })
    .then((response) => response.data);
};

export const profileAPI = {
  getProfileInfo,
  getStatus,
  updateStatus,
};

//authAPI
const getAuthUserData = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

export const authAPI = {
  getAuthUserData,
};
