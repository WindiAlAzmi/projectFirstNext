import axios from "axios";
import BASE_URL from "./base";

const articlesApi = axios.create({
  baseURL: `${BASE_URL}/posts`,
});

export const getArticles = async () => {
  const response = await articlesApi.get("");
  return response.data.data;
};

export const getOneArticles = async (id) => {
  const response = await articlesApi.get(`/${id}`);
  return response.data;
};

export const getArticlesWithComments = async (id) => {
  const response = await articlesApi.get(`/${id}/comments`);
  return response.data;
};
