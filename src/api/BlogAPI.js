import axios from "axios";

const blogAPI = {
  async getPosts(page = 1, limit = 10, sort = "asc", key = "") {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/posts?page=${page}&limit=${limit}&sort=${sort}&key=${key}`
    );
  },

  async getPostsPopular(page = 1, limit = 5, sort = "asc") {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/posts/popular?page=${page}&limit=${limit}&sort=${sort}`
    );
  },

  async getPostBySlug(slug) {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/posts/slug/${slug}`
    );
  },

  async createComment(data) {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/api/comments`,
      data
    );
  },

  async getRecentActivity() {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/posts/recentActivity`
    );
  },

  async getCourses(page = 1, limit = 10, sort = "asc") {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/courses?page=${page}&limit=${limit}&sort=${sort}`
    );
  },

  async getAuthor() {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/users/author`);
  },

  async getCategories(page = 1, limit = 10) {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/categories?page=${page}&limit=${limit}`
    );
  },
};

export default blogAPI;
