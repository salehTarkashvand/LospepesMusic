import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";


const App = () => {

  const { activeSong , isActive} = useSelector((state) => state.player);

  
  return (
    <div className="relative flex">
   
      <Sidebar />
      <div className="flex-1 flex flex-col bg-zinc-800">
      <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {isActive && (
        <div className="absolute
         h-20 bottom-0 
         left-0 
         right-0
          flex
           animate-slideup
           bg-orange-500
              backdrop-blur-lg 
               
              z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
