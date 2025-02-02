import React, { useState } from "react";
import { useSelector } from "react-redux";
import DateFormate from "../helper/DateFormate";
import { Link, useNavigate } from "react-router";
import PlayerName from "./PlayerName";

const QuizBox = () => {
  const navigate = useNavigate();
  const quizData = useSelector((state) => state.quiz.data);
  const playerName = useSelector((state) => state.player.name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startQuiz = () => {
    if (playerName) {
      navigate("start-quiz");
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <div className="w-96 h-[450px] bg-green-200 mt-10 flex flex-col justify-around text-slate-800 md:w-[650px] rounded-md p-6">
      <h1>
        Title : <span>{quizData.title}</span>
      </h1>
      <p>Topic: {quizData.topic}</p>
      <p>Duration: {quizData.duration} minutes</p>
      <p>Questions: {quizData.questions_count}</p>
      <p>Marks: {quizData.correct_answer_marks}</p>
      <p>Negative Marks: {quizData.negative_marks}</p>
      <div
        onClick={startQuiz}
        className="bg-purple-900 text-white py-2 px-6 rounded-full text-center text-2xl font-bold"
      >
        {!playerName ? "Enter Player Name" : "Start Quiz"}
      </div>
      {isModalOpen && <PlayerName closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default QuizBox;
