import React from "react";

const VideoList = props => {
  return (
    <div>
      <ul className="col-md-4 list-group">{props.videos.length}</ul>
    </div>
  );
};

export default VideoList;
