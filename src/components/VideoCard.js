import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-72 h-full shadow-lg grow-1 flex flex-col justify-between">
      <div>
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="Video Thumbnail"
        />
        <p className="font-bold py-2">{title}</p>
      </div>
      <ul>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
