import {FaHome, FaChartLine, FaCompass, FaGripHorizontal,FaTicketAlt, FaRegCalendarAlt
,FaRegHeart, FaUsers, FaRegStar} from 'react-icons/fa'
import { useState } from 'react'

export default function MusicNav(){
    return(
        <div className=" container-xs w-[35vw] py-4 px-8 flex flex-col h-full 
        bg-white shadow-lg overflow-y-auto overflow-x-hidden">
            <div className="flex w-full h-[3vh]">

            </div>
            <div className="flex flex-col w-[20vw] ">
                <h1 className=' my-10 text-3xl'>Halo<span className=' text-blue-600'>fi</span></h1>
                <NavBtn state='active' btnicon={<FaHome size='28'/>} text='Home'/>
                <NavBtn state='' btnicon={<FaChartLine size='28'/>} text='Trends'/>
                <NavBtn state='' btnicon={<FaCompass size='28'/>} text='Feed'/>
            </div>
            <div className="flex my-4 flex-col">
                <h6 className=' text-gray-400'>Discover</h6>
                <NavBtn state='' btnicon={<FaGripHorizontal size='28'/>} text='New and Notable'/>
                <NavBtn state='' btnicon={<FaRegCalendarAlt size='28'/>} text='Release Calendar'/>
                <NavBtn state='' btnicon={<FaTicketAlt size='28'/>} text='Events'/>
            </div>
            <div className="flex my-4 flex-col">
                <h6 className=' text-gray-400'>Your Collection</h6>
                <NavBtn state='' btnicon={<FaRegHeart size='28'/>} text='Favorite Songs'/>
                <NavBtn state='' btnicon={<FaUsers size='28'/>} text='Artist'/>
                <NavBtn state='' btnicon={<FaRegStar size='28'/>} text='Albums'/>
            </div>
        </div>
    )
}


const NavBtn = (props) => {
    return(
        <div className={props.state === 'active' ? 'rounded-xl bg-black text-white w-full flex p-4 items-center' : 'rounded-xl bg-white text-black w-full flex p-4 items-center' }>
            <NavIcon icon={props.btnicon}/>
            <span className=' text-md'>{props.text}</span>
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

