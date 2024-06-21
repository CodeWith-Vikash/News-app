import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../store/AppSlice";
import { Link } from "react-router-dom";

const Favourites = () => {
  const [Favourites, setFavourites] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   remove item from favourite
  const removeFav = (title) => {
    let newdata = Favourites.filter((item) => item.title != title);
    setFavourites(newdata);
    localStorage.setItem("favourite", JSON.stringify(newdata));
  };

  //    navigate to detailspage
  const handleClick = (data) => {
    dispatch(setDetails(data));
    navigate(`/details/${data.title}`);
  };

  // fetching favourite from localStorage
  useEffect(() => {
    let favourite = localStorage.getItem("favourite");
    setFavourites(favourite ? JSON.parse(favourite) : []);
  }, [Favourites]);

  
  return Favourites.length == 0 ? (
    <div className="min-h-[70vh] flex flex-col items-center gap-4">
      <p className="text-center font-semibold text-xl mt-12">
        No Favourite Found
      </p>
      <Link to="/">
      <button className="bg-green-500 py-1 px-2 rounded-lg  font-semibold text-white">
        Go to homepage
      </button>
      </Link>
    </div>
  ) : (
    <div className="min-h-[70vh] flex flex-wrap justify-center gap-6 py-10">
      {Favourites.map((item, index) => {
        return (
          <div className="w-[300px] flex flex-col gap-1 shadow-xl" key={index}>
            <img
              src={item.image ? item.image : "/noimage.jfif"}
              alt=""
              className="w-full h-[200px] object-cover"
            />
            <h3 className="font-semibold leading-5 p-2">{item.title}</h3>
            <div className="flex justify-between p-4">
              <button
                className="bg-green-500 py-1 px-2 rounded-lg  font-semibold text-white"
                onClick={() => handleClick(item)}
              >
                Details
              </button>
              <FaTrash
                size="1.7rem"
                color="red"
                className="cursor-pointer"
                onClick={() => removeFav(item.title)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
