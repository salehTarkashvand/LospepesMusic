import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? '' : ''} hidden sm:block h-16 w-16 mr-3`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-zinc-900 font-bold text-xl ">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate  text-sm text-zinc-700">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
