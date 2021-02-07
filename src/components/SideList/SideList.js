import React, { useEffect, useContext } from "react";
import { Store } from "../../store";
import { fetchRelatedData } from "../../apis";
import SideListItem from "../SideListItem/SideListItem";
import Style from "./SideList.module.scss";

const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const setRelatedVideo = async (id) => {
    await fetchRelatedData(id).then((res) => {
      setGlobalState({
        type: "SET_RELATED",
        payload: { related: res.data.items }
      });
    });
  };

  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
  }, [globalState.selected]);
  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          return (
            // たまに snippet がないレコードがいる
            video.snippet ? (
              <SideListItem
                id={video.id.videoId}
                key={video.id.videId}
                src={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
              />
            ) : (
              <span>no data</span>
            )
          );
        })
      ) : (
        <span>no data</span>
      )}
    </div>
  );
};
export default SideList;
