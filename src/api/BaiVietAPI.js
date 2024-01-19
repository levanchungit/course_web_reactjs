import axios from "axios";
import { API_URL } from "../constants/appConstants";

const baiVietAPI = {
  async getPosts(page = 1, limit = 10, sort = "asc") {
    return await axios.get(
      `${API_URL}/api/posts?page=${page}&limit=${limit}&sort=${sort}`
    );
  },

  async getPostsPopular(page = 1, limit = 5, sort = "asc") {
    return await axios.get(
      `${API_URL}/api/posts/popular?page=${page}&limit=${limit}&sort=${sort}`
    );
  },

  async getPostBySlug(slug) {
    return await axios.get(`${API_URL}/api/posts/slug/${slug}`);
  },
};

export default baiVietAPI;
