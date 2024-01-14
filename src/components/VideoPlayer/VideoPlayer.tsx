import React from "react";
import YouTube from "react-youtube";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const opts = {
    height: "400",
    width: "585",
    playerVars: {
      modestbranding: 1, // Hide YouTube logo
      showinfo: 0, // Hide video title and uploader
      controls: 1, // Show player controls
      disablekb: 0, // Enable keyboard controls
      fs: 1, // Enable fullscreen button
      rel: 0, // Hide related videos at the end
      iv_load_policy: 3, // Turn off video annotations
    },
  };

  return <YouTube videoId={videoUrl} opts={opts} />;
};

export default VideoPlayer;
