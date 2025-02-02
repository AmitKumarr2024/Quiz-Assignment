import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerName } from "../Redux/playerDetails";
import { useNavigate } from "react-router";
import { MdOutlineClose } from "react-icons/md";
import { resetQuiz } from "../Redux/quizSlice";

const PlayerName = ({ closeModal }) => {
  const navigate = useNavigate();
  const [playerName, setPlayer] = useState("");
  const dispatch = useDispatch();

  const submitName = () => {
    dispatch(setPlayerName(playerName));

    closeModal();

    dispatch(resetQuiz()); // Dispatch the resetQuiz action to reset quiz data
  };

  return (
    <div className="fixed -top-40 right-0 left-0 bottom-0 flex justify-center items-center">
      <div className="w-96 h-50 relative bg-blue-50 rounded-md flex flex-col justify-evenly items-center ">
        <MdOutlineClose
          onClick={closeModal}
          className="absolute text-3xl -top-6 -right-9 cursor-pointer text-red-500 "
        />
        <label>
          Name :
          <input
            type="text"
            placeholder="Player name"
            className="px-2 ml-2 outline-none border-2 rounded-lg border-gray-300"
            value={playerName} // Bind the input value to playerName
            onChange={(e) => setPlayer(e.target.value)} // Update the playerName state
          />
        </label>
        <button
          onClick={submitName}
          className="bg-sky-300 text-xl tracking-wider rounded-md capitalize py-1 px-6 "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PlayerName;
