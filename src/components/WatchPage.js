import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_DATA } from './../utils/constants';
import { addData } from '../utils/videoPlayBackSlice';

const WatchPage = () => {
  const { title, channelTitle, views } = useSelector(
    (store) => store.videoPlayBack
  );
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
    const fetchVidData = async () => {
      const data = await fetch(
        YOUTUBE_VIDEO_DATA + searchParams.get('v') + '&key=' + GOOGLE_API_KEY
      );
      const json = await data.json();
      dispatch(
        addData({
          title: json.items[0].snippet.title,
          channelTitle: json.items[0].snippet.channelTitle,
          views: json.items[0].statistics.viewCount,
        })
      );
    };
    fetchVidData();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[60%]">
        <iframe
          className="w-full aspect-video"
          src={'https://www.youtube.com/embed/' + searchParams.get('v')}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-[60%]">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex justify-between w-[60%]">
        <p>{channelTitle}</p>
        <p>{views} Views</p>
      </div>
    </div>
  );
};

export default WatchPage;
