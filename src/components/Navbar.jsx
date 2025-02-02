import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import PlayerName from "./PlayerName";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../Redux/quizSlice";
import { FaUser } from "react-icons/fa";
import { RiResetRightFill } from "react-icons/ri";



const Navbar = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const playerData = useSelector((state) => state.player.name);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const resetScore = () => {
    dispatch(resetQuiz());
  };
  return (
    <>
      <div>
        {/* Navbar */}
        <div className="w-full border-b-2 border-slate-200 h-16 md:justify-between flex justify-evenly md:px-20 px- items-center sticky top-0">
          <Link
            to={"/"}
            className="bg-purple-700 px-3 font-semibold py-1 rounded-full text-white"
          >
            Quiz App
          </Link>
          <div className="flex justify-between gap-9">
            <button
              className="bg-purple-700 hover:bg-purple-800 flex items-center gap-3 cursor-pointer px-3 capitalize font-semibold py-1 rounded-full text-white"
              onClick={openModal}
            >
          <FaUser />
                {playerData ? playerData : "Set Player Name"}
            </button>

            <button
              onClick={resetScore}
              className="bg-red-500 flex items-center gap-3 hover:bg-red-700 cursor-pointer px-3 capitalize font-semibold py-1 rounded-full text-white"
            >
              <RiResetRightFill className="text-2xl"/>
              Reset game
            </button>

            {isModalOpen && <PlayerName closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
