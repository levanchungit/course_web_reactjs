import axios from "axios";
import { API_URL } from "../constants/appConstants";

const tacGiaAPI = {
  async getAuthor() {
    return await axios.get(`${API_URL}/api/users/author`);
  },
};

export default tacGiaAPI;
