import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ activeSong, isPlaying, handlePause, handlePlay, title ,}) =>
  isPlaying && activeSong?.title === title ? (
    <FaPauseCircle 
    size={70}
    className="text-gray-100"
    onClick={handlePause}/>
  ) : (
    <FaPlayCircle 
    size={70}
    className="text-gray-100"
    onClick={handlePlay}/>
  );

export default PlayPause;