export async function getYTVideos() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqFzWxSCi39LnW1JKFR3efg&maxResults=6&order=date&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data;
}
