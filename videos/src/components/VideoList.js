import React from "react";
import VideoItem from "./VideoItem";


const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />);

    return (
        <div className="ui relaxed list">{videoItems}</div>
    );
}

export default VideoList;
