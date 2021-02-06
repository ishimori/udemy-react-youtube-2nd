import axios from "axios";

const KEY = "AIzaSyDnPuL7tqp0h11-eSUJq3lp1yOtXIMoFik";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      part: "snippet",
      maxResults: 10,
      key: KEY,
      regionCode: "JP",
      type: "video",
      chart: "mostPopular"
    }
  });
};
