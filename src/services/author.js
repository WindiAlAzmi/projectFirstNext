import axios from "axios";
import BASE_URL from "./base";

const authorsApi = axios.create({
  baseURL: `${BASE_URL}/users`,
});

export const getAuthor= async () => {
  const response = await authorsApi.get("");
  return response.data;
};

export const createAuthor = async (data) => {
  const response = await authorsApi.post("", data);
  return response.data;
};

export const updateAuthor = async (data, id) => {
  const response = await authorsApi.put(`/${id}`, data);
  return response.data;
};

export const deleteAuthor = async (id) => {
  const response = await authorsApi.delete(`/${id}`);
  return response.data;
};

export const postAuthor = async (id) => {
  const response = await authorsApi.get(`/${id}/posts`);
  return response.data;
};

export const getOneAuthor = async (id) => {
  const response = await authorsApi.get(`/${id}`);
  return response.data;
};

