import React from 'react';
import { useContext } from 'react';
import { assets, songsData } from '../assets/assets/assets';
import { PlayerContext } from '../../context/PlayerContext';

const Player = () => {

const {seekBar, track, seekBg, isPlaying, play, pause, time, currentTime, totalTime, next, previous, seekSong } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center px-4 text-white">
      <div className="hidden lg:flex items-center gap-4 w-full justify-center">
        {/* Song Image & Info */}
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>

        {/* Controls & Progress Bar */}
        <div className="flex flex-col items-center gap-2 w-full max-w-[600px]">
          {/* Music Controls */}
          <div className="flex gap-4">
            <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
            <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
            {
              isPlaying ? <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" /> :
              <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
              
            }
            
            <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-5 w-full">
            <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
            <div ref={seekBg} onClick={seekSong} className="relative w-[60vw] max-w-[500px] bg-gray-300 rounded-full h-2 cursor-pointer">
              {/* Progress Indicator */}
              <div ref={seekBar} className="absolute top-0 left-0 h-2 bg-green-800 rounded-full w-10"></div>
            </div>
            <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
          </div>
        </div>
      </div>
      <div className='hiddden lg:flex items-center gap-4 opacity-75'>
        <img className='w-4' src={assets.play_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className='w-20 bg-slate-50 h-1 rounded'>

        </div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
