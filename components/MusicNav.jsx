import {FaHome, FaChartLine, FaCompass, FaGripHorizontal,FaTicketAlt, FaRegCalendarAlt
,FaRegHeart, FaUsers, FaRegStar, FaBars} from 'react-icons/fa'
import UseWindowSize from './hooks/UseWindowSize';
import { useState, useEffect } from 'react'

export default function MusicNav(){
    const size = UseWindowSize();
    const notHidden = "w-[28vw] min-w-[300px] max-w-[320px]  px-4 flex flex-col h-full bg-white shadow-lg overflow-y-auto overflow-x-hidden absolute top-0 left-0 z-20 xl:relative transition-all duration-700 musicNav"
    const Hidden = "w-[5vw] h-[5vh] overflow-y-hidden overflow-x-hidden absolute top-0 left-0 z-20 xl:relative transition-all duration-700"

    const [hiddenMusicNav, setHiddenMusicNav] = useState(false)
    const [queryState, setQueryState] = useState(false)

    if((size.width < 1280) && !hiddenMusicNav && !queryState){
        setHiddenMusicNav(true)
        setQueryState(true)
    }

    

    const FoldUp = (event) => {
        setQueryState(true)
        if(!hiddenMusicNav){
            setHiddenMusicNav(true)
        }
        else{
            setHiddenMusicNav(false)
        }
    }
    return(
        <div className={!hiddenMusicNav ? notHidden : Hidden}>
            <FaBars className='flex xl:hidden absolute top-0 left-0 barIcon' onClick={FoldUp}  size='20'/>
            <div className={!hiddenMusicNav ? "flex flex-col" : 'scale-0'}>
                <div className="flex flex-col w-[20vw] ">
                    <h1 className=' my-10 text-3xl'>Halo<span className=' text-blue-600'>fi</span></h1>
                    <NavBtn state='active' btnicon={<FaHome size='20'/>} text='Home'/>
                    <NavBtn state='' btnicon={<FaChartLine size='20'/>} text='Trends'/>
                    <NavBtn state='' btnicon={<FaCompass size='20'/>} text='Feed'/>
                </div>
                <div className="flex my-4 flex-col">
                    <h6 className=' text-gray-400'>Discover</h6>
                    <NavBtn state='' btnicon={<FaGripHorizontal size='20'/>} text='New and Notable'/>
                    <NavBtn state='' btnicon={<FaRegCalendarAlt size='20'/>} text='Release Calendar'/>
                    <NavBtn state='' btnicon={<FaTicketAlt size='20'/>} text='Events'/>
                </div>
                <div className="flex my-4 flex-col">
                    <h6 className=' text-gray-400'>Your Collection</h6>
                    <NavBtn state='' btnicon={<FaRegHeart size='20'/>} text='Favorite Songs'/>
                    <NavBtn state='' btnicon={<FaUsers size='20'/>} text='Artist'/>
                    <NavBtn state='' btnicon={<FaRegStar size='20'/>} text='Albums'/>
                </div>
            </div>
        </div>
    )
}


const NavBtn = (props) => {
    return(
        <div className={props.state === 'active' ? 'rounded-xl bg-black text-white w-full flex p-4 items-center min-w-[250px]' : 'rounded-xl bg-white text-black w-full max-w-[285px] flex p-4 items-center hover:bg-purple-200 transition-all duration-300 my-2 cursor-pointer min-w-[250px]' }>
            <NavIcon icon={props.btnicon}/>
            <span className=' text-sm'>{props.text}</span>
        </div>
    )
}

const NavIcon = ({icon}) => {
    return(
        <div className="flex items-center rounded-3xl w-fit mr-4">
            {icon}
        </div>
    )
}

