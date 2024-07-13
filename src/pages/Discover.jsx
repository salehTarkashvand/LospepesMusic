import { Error ,Loader , SongCard } from "../components";
import {genres} from "../assets/constants"
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";


const Discover = () =>{
    const dispatch = useDispatch();
    const { activeSong , isPlaying } = useSelector((state)=>state.player);
    const {data , isFetching , error } = useGetTopChartsQuery();
    const genreTitle = 'Pop'
    
    if(isFetching) return <Loader title="loading songs ..."/>

    if(error) return <Error />

    return (
        <div className="flex flex-col">

           <div className="w-full flex justify-between items-center 
           sm:flex-row flex-col mt-4 mb-10">
               <h1 className="font-bold text-3xl
             text-white "> Discover {genreTitle}</h1>
               <select
               onChange={()=> {}}
               value=""
               className="bg-black text-gray-300 p-3 text-sm 
               rounded-lg outline-none sm:mt-0 mt-5">
            
               {genres.map((genre)=><option key={genre.value} 
                value={genre.value}>{genre.title}</option>)}

               </select>
           </div>
               
            <div className="flex flex-wrap sm:justify-start 
            justify-center gap-8">
               {data.map((song , i)=>(
                <SongCard
                data={data}
                isPlaying={isPlaying}
                activeSong = {activeSong}             
                key={song.key}
                song={song}            
                i={i}
                />
            ))}
           </div>
        </div>
     )
    };

export default Discover;
