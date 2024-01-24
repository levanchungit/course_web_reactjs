import axios from "axios";
import { API_URL } from "../constants/appConstants";

const podcastAPI = {
  async getVideos(page = 1, limit = 10, sort = "asc") {
    return await axios.get(
      `${API_URL}/api/videos?page=${page}&limit=${limit}&sort=${sort}`
    );
  },
};

export default podcastAPI;
