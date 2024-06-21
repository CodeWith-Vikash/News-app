import React, { useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useDispatch} from "react-redux";
import {fetchQuery} from '../store/SearchSlice'

const Navbar = () => {
  const [isfocus, setisfocus] = useState(false)
  const [searchval, setsearchval] = useState('')
  const [selectval, setselectval] = useState('')
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const {query}= useParams()

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
    <div>
       <nav className="flex justify-between items-center lg:px-6 px-2 h-16 border">
      <Link to="/" className={`${isfocus && 'hidden lg:block'}`}>
        <div className={`logo flex items-center gap-1 font-semibold text-lg `}>
          <img src="/logo.png" alt="" className="md:h-10 h-6" />
          <h1 className="text-sm md:text-lg">NEWZY</h1>
        </div>
      </Link>
        {/* dropdown */}
      <select className={`sm:p-4 outline-none font-semibold lg:hidden flex ${isfocus && 'hidden lg:block'}`}
       value={selectval}
       onChange={(e)=> {
          setselectval(e.target.value)
          searchCategory(e.target.value)
       }}
      >
        <option
          value="business"
          className="text-lg hover:bg-black hover:text-white"
        >
          business
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
          value="tech"
          className="text-lg hover:bg-black hover:text-white"
        >
          tech
        </option>
      </select>
      {/* categories */}
       <section className="hidden lg:flex gap-6 font-semibold text-lg items-center">
         <p className="cursor-pointer hover:translate-y-[-7px] hover:text-blue-600" onClick={()=> searchCategory('Business')}>Business</p>
         <p className="cursor-pointer hover:translate-y-[-7px] hover:text-blue-600" onClick={()=> searchCategory('sports')}>Sports</p>
         <p className="cursor-pointer hover:translate-y-[-7px] hover:text-blue-600" onClick={()=> searchCategory('earth')}>Earth</p>
         <p className="cursor-pointer hover:translate-y-[-7px] hover:text-blue-600" onClick={()=> searchCategory('Tech')}>Tech</p>
         <p className="cursor-pointer hover:translate-y-[-7px] hover:text-blue-600" onClick={()=> searchCategory('Science')}>Science</p>
         <p className="cursor-pointer hover:translate-y-[-7px] hover:text-blue-600" onClick={()=> searchCategory('Health')}>Health</p>
         <p className="cursor-pointer hover:translate-y-[-7px] hover:text-blue-600" onClick={()=> searchCategory('Education')}>Education</p>
         <Link to='/favourites'><div className="bg-blue-600 text-white w-fit rounded-lg text-lg font-semibold py-2 px-4 m-4">Favourites</div></Link>
       </section>
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
     <Link to='/favourites'><div className="bg-blue-600 text-white w-fit rounded-lg text-lg font-semibold py-2 px-4 m-4 lg:hidden">Favourites</div></Link>
    </div>
  );
};

export default Navbar;
