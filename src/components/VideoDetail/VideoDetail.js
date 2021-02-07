import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const VideoDetail = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("location", location);
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    console.log("id", id);
  }, []);
  return <div>VideoDetail page</div>;
};
export default VideoDetail;
