import {BsVolumeUp} from 'react-icons/bs'

const SongMenu = () => {
    return(
        <div className="flex flex-col w-full h-[45%]">
                    <div className="flex justify-between items-center w-full h-[15%] ">
                        <h1 className='font-bold text-2xl'>My Playlist</h1>
                        <h6>Show All</h6>
                    </div>
                    <div className="flex flex-col w-full h-[85%]  overflow-auto py-2">
                        <Song/>
                        <Song/>
                        <Song/>
                    </div>
                </div>
    )
}




const Song = () => {
    return(
        <div className="text-xs flex  my-1 rounded-lg w-full h-[20%] mdl:text-sm md:text-base">
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
    )
}

export default SongMenu;