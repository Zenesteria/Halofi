import {FaArrowLeft, FaArrowRight, FaFire, FaRegHeart} from 'react-icons/fa'
import {BsSearch, BsMusicNoteBeamed, BsArrowsAngleExpand, BsFillPauseCircleFill, BsShuffle, BsVolumeDown, BsVolumeUp} from 'react-icons/bs'
import {FiRepeat, FiRewind, FiFastForward} from 'react-icons/fi'
import {BiRewind, BiFastForward} from 'react-icons/bi'
import player from '../styles/player.module.css'

export default function MusicApp(){
    return(
        <div className="flex h-screen w-full ">
            <div className="flex  ml-auto
             w-full p-4 flex-col">
                <TopNav/>
                <Main/>
            </div>
        </div>
    )
}


const TopNav = () => {
    return(
        <div className="flex w-full h-[7vh] items-center">
            <div className="flex h-full w-[15%]  items-center justify-around p-4">
                <FaArrowLeft size='16'/>
                <FaArrowRight size='16'/>
            </div>

            <label className="relative block w-[54%] mr-auto">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <BsSearch className=' text-gray-400' size='20'/>
                </span>
                <input className="placeholder:italic
                 placeholder:text-slate-400 block
                  bg-white w-full rounded-2xl 
                  py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                  focus:border-none  sm:text-sm" 
                  placeholder="Search for artist songs and..." 
                  type="text" name="search"/>
            </label>
            <div className="flex items-center w-[25%]">
                <h2 className='text-xl font-bold'>Shortcuts</h2>
            </div>
        </div>
    )
}

const Main = () => {
    return(
        <div className="flex w-full h-full">
            <div className="flex w-[70%]  flex-col px-4">
                <div className="flex w-full h-[8%]  ">
                    <div className="flex flex-col w-fit">
                        <h6 className='flex text-sm items-center h-fit'>{"What's Hot"} <FaFire className='mx-1' size='14'/></h6>
                        <h1 className=' text-2xl font-bold'>Trending</h1>
                    </div>
                    <div className="flex ml-auto py-1 px-4 items-end">
                        <h6>{'More >'}</h6>
                    </div>
                </div>
                <div className="flex relative w-full 
                h-[30%] bg-cover my-4 rounded-2xl bg-[url('/images/backdropOne.jpg')]">
                    <div className="absolute w-full h-full rounded-2xl  bg-gradient-to-r from-white via-[rgba(255,255,255,0.7)] to-transparent"></div>
                    <div className="flex z-10 flex-col w-fit h-full text-black justify-center px-4">
                        <h6 className=' text-gray-400 mb-2 text-sm'>Artist</h6>
                        <h1 className='font-bold text-2xl mb-4'>
                            On Top <br/>
                            Of The World
                        </h1>
                        <div className="flex">
                            <button className='bg-black text-white text-sm px-10 py-1 rounded-3xl mr-2'>PLAY</button>
                            <button className='text-black px-10 py-2 rounded-3xl border-black border-2 border-solid'>FOLLOW</button>
                        </div>
                    </div>
                </div>

                {/* THE PLAYLIST SECTION */}

                <div className="flex flex-col w-full h-[45%]">
                    <div className="flex justify-between items-center w-full h-[15%] ">
                        <h1 className='font-bold text-2xl'>My Playlist</h1>
                        <h6>Show All</h6>
                    </div>
                    <div className="flex flex-col w-full h-[85%]  overflow-auto py-2">
                        <div className="flex  my-1 rounded-lg w-full h-[20%]">
                            <div className="flex items-center justify-center h-full w-[10%] ">
                                <BsVolumeUp size='20'/>
                            </div>
                            <div className="flex items-center px-2 w-[25%] ">
                                <h3>Time is Ticking Out</h3>
                            </div>
                            <div className="flex items-center px-2 w-[20%] ">
                                <h3>The Cranberries</h3>
                            </div>
                            <div className="flex items-center px-2 w-[10%] ">
                                <h3>2:59</h3>
                            </div>
                            <div className="flex items-center px-2 w-[30%] ">
                                <h3>Wake Up And Small T...</h3>
                            </div>
                        </div>
                        <div className="flex  my-1 rounded-lg w-full h-[20%]">
                            <div className="flex items-center justify-center h-full w-[10%] ">
                                <BsVolumeUp size='20'/>
                            </div>
                            <div className="flex items-center px-2 w-[25%] ">
                                <h3>Time is Ticking Out</h3>
                            </div>
                            <div className="flex items-center px-2 w-[20%] ">
                                <h3>The Cranberries</h3>
                            </div>
                            <div className="flex items-center px-2 w-[10%] ">
                                <h3>2:59</h3>
                            </div>
                            <div className="flex items-center px-2 w-[30%] ">
                                <h3>Wake Up And Small T...</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full bg-white h-[15%] rounded-2xl shadow-xl">
                     <div className="flex w-[90%] mx-auto h-[60%] items-center">
                        <div className="flex items-center w-fit">
                            <FaRegHeart className=' bg-slate-100 p-2 rounded-lg mx-1' size='32'/>
                            <BsMusicNoteBeamed className=' bg-slate-100 p-2 rounded-lg mx-1' size='32'/>
                            <BsArrowsAngleExpand className=' bg-slate-100 p-2 rounded-lg mx-1' size='32'/>
                        </div>
                        <div className="flex items-center justify-center w-[85%]  h-full">
                            <FiRepeat className=' mr-3' size='16'/>
                            <BiRewind className='mr-3' size='28'/>
                            <BsFillPauseCircleFill className='mr-3 bg-white rounded-full' size='40'/>
                            <BiFastForward className='mr-3' size='28'/>
                            <BsShuffle className='mr-3' size='16'/>
                        </div>
                        <div className="flex items-center w-fit ">
                            <BsVolumeDown className=' mx-1' size='24'/>
                            <input className={player.voltrack} type="range" name="" id="volume" />
                            <BsVolumeUp className=' mx-1' size='24'/>
                        </div>
                     </div>
                     <div className="flex items-center m-auto w-[90%] h-[20%]">
                        <span>0:00</span>
                        <input type="range" className={player.seeker}/>
                        <span>0:00</span>
                     </div>   
                </div>
            </div>
        </div>
    )
}