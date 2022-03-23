import {FaRegHeart} from 'react-icons/fa'
import {BsMusicNoteBeamed, BsArrowsAngleExpand, BsFillPauseCircleFill, BsShuffle, BsVolumeUp, BsVolumeDown} from 'react-icons/bs'
import {FiRepeat, FiMoreHorizontal} from 'react-icons/fi'
import {BiRewind, BiFastForward} from 'react-icons/bi'
import player from '../music_app_styles/player.module.css'

const MusicControls = () => {
    return(
        <div className="flex flex-col justify-between w-full bg-white h-[15%] rounded-2xl shadow-xl">
            <div className="flex w-[90%] mx-auto h-[60%] items-center justify-center">
            <div className="flex flex-col items-center w-fit">
                <div className="hidden mdxs:flex">
                    <FaRegHeart className=' bg-slate-100 p-2 rounded-lg mx-1 text-[1.8rem]'/>
                    <BsMusicNoteBeamed className=' bg-slate-100 p-2 rounded-lg mx-1 text-[1.8rem]'/>
                    <BsArrowsAngleExpand className=' bg-slate-100 p-2 rounded-lg mx-1 text-[1.8rem]'/>
                </div>
                <FiMoreHorizontal className='mdxs:hidden'/>
            </div>
            <div className="flex items-center justify-center w-[85%]  h-full">
                <FiRepeat className=' mr-3' size='16'/>
                <BiRewind className='mr-3 text-[1.2rem]'/>
                <BsFillPauseCircleFill className='mr-3 bg-white rounded-full text-[1.5rem] mdxs:text-[2.5rem]'/>
                <BiFastForward className='mr-3' size='28'/>
                <BsShuffle className='mr-3' size='16'/>
            </div>
            <div className="flex items-center w-fit">
                <div className="hidden mdxs:flex">
                    <BsVolumeDown className=' mx-1' size='24'/>
                    <input className={player.voltrack} type="range" name="" id="volume" />
                    <BsVolumeUp className=' mx-1' size='24'/>
                </div>
                <FiMoreHorizontal className='mdxs:hidden'/>
            </div>
            </div>
            <div className="flex items-center m-auto w-[90%] h-[20%]">
                <span>0:00</span>
                <input type="range" className={player.seeker}/>
                <span>0:00</span>
            </div>   
        </div>
    )
}


export default MusicControls;