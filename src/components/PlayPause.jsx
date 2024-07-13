import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ activeSong, isPlaying, handlePause, handlePlay, title ,}) =>
  isPlaying && activeSong?.title === title ? (
    <FaPauseCircle 
    size={50}
    className="text-gray-300"
    onClick={handlePause}/>
  ) : (
    <FaPlayCircle 
    size={50}
    className="text-gray-300"
    onClick={handlePlay}/>
  );

export default PlayPause;