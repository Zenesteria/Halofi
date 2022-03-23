import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';

const TopNav = () => {
    return(
        <div className="flex w-full h-[7vh] items-center">
            {/* ARROWS */}
            <div className="flex h-full w-[15%]  items-center justify-around p-4">
                <FaArrowLeft size='16'/>
                <FaArrowRight size='16'/>
            </div>
            
            {/* SEARCH BOX */}
            <label className="relative block w-[80%] mr-auto">
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
        </div>
    )
}

export default TopNav;