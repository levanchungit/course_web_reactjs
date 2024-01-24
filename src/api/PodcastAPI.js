import axios from "axios";

const podcastAPI = {
  async getVideos(page = 1, limit = 10, sort = "asc") {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/videos?page=${page}&limit=${limit}&sort=${sort}`
    );
  },
};

export default podcastAPI;
