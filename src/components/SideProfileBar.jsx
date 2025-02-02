import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SideProfileBar = () => {
  const playerName = useSelector((state) => state.player.name);
  const playerSkipQuestion = useSelector((state) => state.player.questionSkip);
  const { totalMarks } = useSelector((state) => state.quiz);

  const [totalScore, setTotalScore] = useState(0);
  console.log("totaly", totalMarks);

  useEffect(() => {
    const total = Object.values(totalMarks).reduce(
      (acc, mark) => acc + mark,
      0
    );
    setTotalScore(total);

    // Store in localStorage
    localStorage.setItem("totalScore", total);
  }, [totalMarks]);

  console.log("Score", totalScore);

  return (
    <>
      <div className="h-48 w-96  bg-indigo-600 text-white flex items-center rounded-md p-6 gap-6 flex-col mt-10 md:h-48 md:w-60 md:gap-10 ">
        <h1 className="border-b-2 text-2xl">Player Profile</h1>
        <div className="flex flex-col w-44 mx-2">
          <div className="flex justify-between">
            <h4>Name :</h4>
            <span className="capitalize">{playerName}</span>
          </div>
          <div className="flex justify-between">
            <h4>Score : </h4>
            <span>{totalScore}/40</span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SideProfileBar;
