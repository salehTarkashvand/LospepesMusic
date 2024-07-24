import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ data, song, isPlaying, activeSong, i }) => {
  // const activeSong = {title: "test"};
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      className="flex flex-col w-[255px] p-4 bg-zinc-200 
   bg-opacity-80 backdrop-blur-sm animate-slideup 
   rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center w-full h-full bg-zinc-800
          bg-opacity-40 group-hover:flex
          ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            title={song.title}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images ? song.images.coverart : null} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-zinc-900 truncate">
          <Link to={`/songs/${"dd"}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-zinc-600 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
