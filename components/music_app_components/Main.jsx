import {FaFire, FaRegHeart} from 'react-icons/fa'
import {FiRepeat} from 'react-icons/fi'
import {BiRewind, BiFastForward} from 'react-icons/bi'
import {BsVolumeUp, BsVolumeDown, BsMusicNoteBeamed, BsArrowsAngleExpand, BsFillPauseCircleFill, BsShuffle} from 'react-icons/bs'
import Banner from './Banner'
import SongMenu from './SongMenu'
import MusicControls from './MusicControls'

const Main = () => {
    return(
        <div className="flex w-[100%] justify-center h-full">
            <div className="relative flex w-[100%]  flex-col px-4">
                <div className="flex w-full h-[8%]">
                    <div className="flex flex-col w-fit">
                        <h6 className='flex text-sm items-center h-fit'>{"What's Hot"} <FaFire className='mx-1' size='14'/></h6>
                        <h1 className=' text-2xl font-bold'>Trending</h1>
                    </div>
                    <div className="flex ml-auto py-1 px-4 items-end">
                        <h6>{'More >'}</h6>
                    </div>
                </div>

                {/* THE BANNER SECTION */}

                <Banner/>

                {/* ------------------------- */}



                {/* THE MENU SECTION */}

                <SongMenu/>

                {/* ----------------------------- */}

                <MusicControls/>
            </div>
        </div>
    )
}

export default Main;