import axios from "axios";
import { API_URL } from "../constants/appConstants";

const authAPI = {
  async getPosts(page = 1, limit = 10, sort = "created_at") {
    return await axios.get(
      `${API_URL}/api/posts?page=${page}&limit=${limit}&sort=${sort}`
    );
  },
};

export default authAPI;
