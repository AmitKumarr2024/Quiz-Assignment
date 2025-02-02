import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizCard from "./QuizCard";
import { questionActive } from "../Redux/quizSlice";
import toast from "react-hot-toast";

const QuizTestBoard = () => {
  const quizData = useSelector((state) => state.quiz.data);
  const dispatch = useDispatch();
  const activeQuestionId = useSelector((state) => state.quiz.questionActive);

  const questions = quizData?.questions || [];

  const currentQuestion =
    questions.find((q) => q.id === activeQuestionId) || questions[0];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Dispatch the action after the render to avoid the warning
  useEffect(() => {
    dispatch(questionActive(currentIndex));
  }, [dispatch, currentIndex]); // Only run when currentIndex changes

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  if (currentIndex === 9) {
    toast.success("After this Page your Result Submitted");
  }
  return (
    <div className="flex justify-between gap-9 mt-1">
      {/* Quiz Card (Show One Question at a Time) */}
      <div className="flex flex-col items-center w-full">
        <span className="text-2xl my-9 font-bold">
          {" "}
          Question: {currentIndex + 1}/10
        </span>
        {questions.length > 0 ? (
          <>
            {currentQuestion.id ? (
              <QuizCard
                allData={questions[currentIndex]}
                length={questions.length}
              />
            ) : (
              <p className="text-gray-500">No questions available</p>
            )}

            {/* Pagination Controls */}
            <div className="flex justify-between w-[350px] md:w-[750px] mt-4">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentIndex === 0
                    ? "bg-gray-400"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
                className={`px-4 py-2 rounded-lg ${
                  currentIndex === questions.length - 1
                    ? "bg-gray-400"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">No questions available</p>
        )}
      </div>
    </div>
  );
};

export default QuizTestBoard;
