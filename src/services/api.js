import axios from "axios";

const url = "http://localhost:5000";

export const getRawMaterials = async (path) => {
  return await axios.get(`${url}/${path}`);
};

export const getAllData = async (path, id) => {
  id = id || "";
  return await axios.get(`${url}/${path}/${id}`);
};

export const addData = async (path, value) => {
  return await axios.post(`${url}/${path}`, value);
};

export const editData = async (path, id, value) => {
  return await axios.put(`${url}/${path}/${id}`, value);
};

export const deleteData = async (path, id) => {
  return await axios.delete(`${url}/${path}/${id}`);
};

export const softDelte = async (path, id, value) => {
  value.isActive = false;
  return await axios.put(`${url}/${path}/${id}`, value);
};

export const getAllUsers = async (username, password) => {
  return await axios.get(`${url}/users`);
};
