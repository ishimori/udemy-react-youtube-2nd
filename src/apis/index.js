import axios from "axios";

const KEY = "AIzaSyDnPuL7tqp0h11-eSUJq3lp1yOtXIMoFik";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

const params = {
  part: "snippet",
  maxResults: 20,
  key: KEY,
  regionCode: "JP",
  type: "video"
};
export const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      chart: "mostpopular"
    }
  });
};
export const fetchSelectedData = async (id) => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      id
    }
  });
};
export const fetchRelatedData = async (id) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      relatedToVideoId: id
    }
  });
};
