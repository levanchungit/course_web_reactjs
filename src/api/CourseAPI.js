import axios from "axios";
import { API_URL } from "../constants/appConstants";

const courseAPI = {
  async getCourses(page = 1, limit = 10, sort = "asc") {
    return await axios.get(
      `${API_URL}/api/courses?page=${page}&limit=${limit}&sort=${sort}`
    );
  },
};

export default courseAPI;
