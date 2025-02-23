import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets/assets';
import { PlayerContext } from '../../context/PlayerContext';
const DisplayAlbum = () => {

const {id} = useParams();
const albumData = albumsData[id];
console.log(albumData)

const {playWithId} = useContext(PlayerContext)

  return (
    <>
        <Navbar/>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-70 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1 flex flex-col'>
                    <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                    <b>Spotify </b>
                    1,345,567 likes
                    <b>50 songs,</b>
                    about 3 hr 25 min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
    <p><b className='mr-4'>#</b> Title</p>
    <p>Album</p>
    <p className='hidden sm:block'>Date Added</p>
    <p className="text-center">⏳</p> {/* Instead of an image, you can use an emoji or keep your clock icon */}
</div>

<hr className="border-[#a7a7a7]" />

{/* Songs List */}
{songsData.map((item, index) => (
    <div onClick={()=> playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
        {/* Title */}
        <div className='flex items-center gap-4'>
            <b className='text-[#a7a7a7]'>{index + 1}</b>
            <img className='w-10' src={item.image} alt="" />
            <b className="text-white">{item.name}</b>
        </div>

        {/* Album */}
        <p className='text-[15px]'>{albumData.name}</p>

        {/* Date Added */}
        <p className='text-[15px] hidden sm:block'>5 days ago</p>

        {/* Time (Under Clock Icon) */}
        <p className='text-[15px] text-center'>{item.duration}</p>
    </div>
))}



    </>
  )
}

export default DisplayAlbum
