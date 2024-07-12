import React from 'react';
import BRAND_LOGO from '../utils/assets/watch-tube-logo.png';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const handleSidebarBtnClick = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="flex p-5 m-2 shadow-lg items-center justify-between gap-40">
      <div className="flex grow-0">
        <img
          className="h-8 cursor-pointer"
          alt="Sidebar Toggle Icon"
          onClick={handleSidebarBtnClick}
          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
        />
        <img className="h-8 mx-2" src={BRAND_LOGO} alt="Brand Logo" />
      </div>
      <div className="grow">
        <input
          className="w-3/4 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="search for videos"
        />
        <button className="border border-gray-400 px-3 bg-gray-100 py-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="grow-0">
        <img
          className="h-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
