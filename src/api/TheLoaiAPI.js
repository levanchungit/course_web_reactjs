import axios from "axios";
import { API_URL } from "../constants/appConstants";

const theLoaiAPI = {
  async getCategories(page = 1, limit = 10) {
    return await axios.get(
      `${API_URL}/api/categories?page=${page}&limit=${limit}`
    );
  },
};

export default theLoaiAPI;
