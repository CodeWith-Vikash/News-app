import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useDispatch} from "react-redux";
import {fetchQuery} from '../store/SearchSlice'

const Navbar = () => {
  const [isfocus, setisfocus] = useState(false)
  const [searchval, setsearchval] = useState('')
  const [selectval, setselectval] = useState('')
  const dispatch = useDispatch()
  const navigate= useNavigate()

  // function search query
  const searchNews=()=>{
      dispatch(fetchQuery(searchval))
      setsearchval("")
      navigate(`/search/${searchval}`)
  }

  //  function to search by category
   const searchCategory=(query)=>{
    dispatch(fetchQuery(query))
    setsearchval("")
    navigate(`/category`)
   }

  return (
    <nav className="flex justify-between items-center lg:px-6 px-2 h-16 border">
      <Link to="/" className={`${isfocus && 'hidden lg:block'}`}>
        <div className={`logo flex items-center gap-1 font-semibold text-lg `}>
          <img src="/logo.png" alt="" className="md:h-10 h-6" />
          <h1 className="text-sm md:text-lg">NEWZY</h1>
        </div>
      </Link>
        {/* dropdown */}
      <select className={`sm:p-4 outline-none font-semibold lg:text-xl flex ${isfocus && 'hidden lg:block'}`}
       value={selectval}
       onChange={(e)=> {
          setselectval(e.target.value)
          searchCategory(e.target.value)
       }}
      >
        <option
          value="weather"
          className="text-lg hover:bg-black hover:text-white"
        >
          weather
        </option>
        <option
          value="sports"
          className="text-lg hover:bg-black hover:text-white"
        >
          sports
        </option>
        <option
          value="earth"
          className="text-lg hover:bg-black hover:text-white"
        >
          earth
        </option>
        <option
          value="politics"
          className="text-lg hover:bg-black hover:text-white"
        >
          politics
        </option>
      </select>
      {/* search bar */}
       <div className={`relative`}>
       <input type="text" placeholder="search..."
        className={`outline-none border-2 border-black rounded-full px-4 py-1 w-[35vw] lg:w-[300px] ${isfocus && 'w-[95vw] lg:w-[300px] my-auto mx-auto'}`}
        value={searchval}
        onChange={(e)=> setsearchval(e.target.value)}
        onFocus={()=> setisfocus(true)}
        onBlur={()=> setisfocus(false)}
        onKeyDown={(e)=>{
           if(e.key=='Enter' && searchval != ""){
                searchNews()
           }
        }}
       />
       <FaSearch size='1rem' className="absolute top-[50%] right-4 transform translate-y-[-50%] cursor-pointer" onClick={()=> searchval && searchNews()}/>
       </div>
    </nav>
  );
};

export default Navbar;
