import { useState } from 'react'
import UseWindowSize from '../hooks/UseWindowSize'
import Artist from './Artist'
import {BsSnow} from 'react-icons/bs'
import {GiTrumpet} from 'react-icons/gi'
import {CgPiano} from 'react-icons/cg'
import {FaStar, FaGuitar, FaItunesNote, FaPlus, FaBars} from 'react-icons/fa'



const SubMain = () => {
    const size = UseWindowSize();



    const notHidden = "transition-all duration-700 bg-white max-w-[300px] absolute z-20 right-0 top-0 shadow-md xl:relative xl:bg-transparent xl:shadow-none flex flex-col mt-auto w-[40%] h-full pt-5 px-4 min-w-[300px]"
    const Hidden = "absolute z-20 right-0 top-0 xl:relative max-w-[300px] xl:bg-transparent xl:shadow-none w-[5vw] h-[5vh] transition-all duration-700"
    const [hideSideMenu, setHideMenu] = useState(false)
    const [queryState, setQueryState] = useState(false)


    if(size.width < 1280 && !hideSideMenu && !queryState){
        setQueryState(true)
        setHideMenu(true)
    }

    const foldUp = (event) => {
        setQueryState(true)
        if(!hideSideMenu){
            setHideMenu(true)
        }
        else{
            setHideMenu(false)
        }
    }
    return(
        <div className={!hideSideMenu ? notHidden : Hidden}>
            <FaBars className=' scale-100 xl:scale-0 absolute right-0 top-0 cursor-pointer' onClick={foldUp} size='20'/>
            <div className={!hideSideMenu ? "flex flex-col h-full max-w-[300px] delay-500" : "max-w-[300px] scale-0 h-full"}>
                <h1 className='font-bold text-2xl'>Shortcuts</h1>
                <div className="flex flex-wrap">
                    <Category 
                        text='Chill Hits' 
                        icon={<BsSnow className='mr-2 text-purple-500' size='14'/>}
                    />
                    <Category 
                        text='Piano Blues' 
                        icon={<CgPiano className='mr-2 text-purple-500' size='14'/>}
                    />
                    <Category 
                        text='Jazz' 
                        icon={<GiTrumpet className='mr-2 text-purple-500' size='14'/>}
                    />


                </div>
                <div className="flex flex-col w-full h-full ">
                    <h1 className='font-bold mb-4 text-2xl'>Fav Artist</h1>
                    <div className="flex w-full h-[65%] ">
                        <Artist/>
                    </div>
                    <div className="max-h-[300px] flex flex-col relative items-center justify-center w-full h-[100%] bg-white rounded-lg">
                        <div className="w-[90%] h-[90%] my-4 rounded-2xl bg-[url('/images/trackbackdrop.png')] bg-cover bg-center">

                        </div>
                        <div className="flex w-full h-[20%] items-center pr-4">
                            <div className="flex flex-col w-full bg-slate-50 px-6">
                                <h6 className='text-md font-bold'>Track Name</h6>
                                <p className='text-xs mb-3'>Kana Nishino</p>
                            </div>
                            <button className='p-1 border-2 border-gray-500 text-gray-500 rounded-lg ml-auto h-fit'><FaPlus size='12'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Category = (props) => {
    return(<button className=' bg-black text-white flex flex-1 min-w-[100px] hover:bg-purple-200 hover:scale-110 max-h-10 items-center justify-center m-2 py-2 px-4 rounded-xl transition-all duration-300 xl:bg-white xl:text-purple-700'>
        {props.icon} <span className='font-bold text-xs'>{props.text}</span>
    </button>)
}


export default SubMain;