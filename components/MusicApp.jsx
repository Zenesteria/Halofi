import {FaArrowLeft, FaArrowRight, FaFire, FaVolumeUp} from 'react-icons/fa'


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
            <div className="flex h-full w-[20%]  items-center justify-around p-4">
                <FaArrowLeft size='20'/>
                <FaArrowRight size='20'/>
            </div>

            <input type="text" className='w-[50%] mx-auto rounded-2xl border-0 h-[4vh]' />
            <div className="flex items-center w-[20%]">
                <h2 className='text-xl font-bold'>Shortcuts</h2>
            </div>
        </div>
    )
}

const Main = () => {
    return(
        <div className="flex w-full h-full">
            <div className="flex w-[70%]  flex-col px-4">
                <div className="flex w-full h-[10%] ">
                    <div className="flex flex-col w-fit">
                        <h6 className='flex items-center h-fit'>{"What's Hot"} <FaFire className='mx-1' size='14'/></h6>
                        <h1 className=' text-4xl font-bold'>Trending</h1>
                    </div>
                    <div className="flex ml-auto py-1 px-4 items-end">
                        <h6>{'More >'}</h6>
                    </div>
                </div>
                <div className="flex relative w-full 
                h-[35%] bg-cover my-4 rounded-2xl bg-[url('/images/backdropOne.jpg')]">
                    <div className="absolute w-full h-full rounded-2xl  bg-gradient-to-r from-white via-[rgba(255,255,255,0.7)] to-transparent"></div>
                    <div className="flex z-10 flex-col w-fit h-full text-black justify-center px-4">
                        <h6 className=' text-gray-400 mb-2 text-xs'>Artist</h6>
                        <h1 className='font-bold text-3xl mb-4'>
                            On Top <br/>
                            Of The World
                        </h1>
                        <div className="flex">
                            <button className='bg-black text-white px-10 py-2 rounded-3xl mr-2'>PLAY</button>
                            <button className='text-black px-10 py-2 rounded-3xl border-black border-2 border-solid'>FOLLOW</button>
                        </div>
                    </div>
                </div>

                {/* THE PLAYLIST SECTION */}

                <div className="flex flex-col w-full h-[35%]">
                    <div className="flex justify-between items-center w-full h-[15%] ">
                        <h1 className='font-bold text-3xl'>My Playlist</h1>
                        <h6>Show All</h6>
                    </div>
                    <div className="flex flex-col w-full h-[85%]  overflow-auto py-2">
                        <div className="flex  my-1 rounded-lg w-full h-[20%]">
                            <div className="flex items-center justify-center h-full w-[10%] ">
                                <FaVolumeUp size='20'/>
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
                                <FaVolumeUp size='20'/>
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
                <div className="flex w-full bg-red-300 h-[13%] rounded-2xl">
                        
                </div>
            </div>
        </div>
    )
}