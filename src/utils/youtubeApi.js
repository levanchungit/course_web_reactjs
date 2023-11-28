import axios from "axios";

const getYoutubeVideos = async (maxResults) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&order=date&channelId=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const videoList = response.data.items;
    console.log("getYoutubeVideos", videoList);

    return videoList;
  } catch (error) {
    console.error("Error getYoutubeVideos", error);
    return [];
  }
};

export default getYoutubeVideos;
