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

const savePhoto = (file) => {
  let formData = new FormData();
  formData.append("image", file);
  return instance
    .put("/profile/photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);
};

export const profileAPI = {
  getProfileInfo,
  getStatus,
  updateStatus,
  savePhoto,
};

//authAPI
const getAuthUserData = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

const login = (email, password, rememberMe = false) => {
  return instance
    .post(`auth/login`, { email, password, rememberMe })
    .then((response) => response.data);
};

const logout = (email, password, rememberMe = false) => {
  return instance.delete(`auth/login`).then((response) => response.data);
};

export const authAPI = {
  getAuthUserData,
  login,
  logout,
};
