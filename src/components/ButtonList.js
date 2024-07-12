import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const list = [
    'All',
    'Music',
    'Cricket',
    'News',
    'Cooking',
    'Football',
    'Live',
    'Aviation',
    'Cinema',
    'Gaming',
    'Spelunking',
    'Yacht',
    'Disco',
    'Memes',
    'Workout',
    'Gym',
    'Politics',
    'Physics',
  ];
  return (
    <div className="flex overflow-x-auto no-scrollbar">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
