import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { questionActive, setTotalMarks } from "../Redux/quizSlice";
import { useNavigate } from "react-router";

const QuizCard = ({ allData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!allData) return <p className="text-gray-500">No Question Selected</p>;

  const { description, detailed_solution, id, options, topic } = allData;
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(null);
  const [marks, setMarks] = useState({});
  const quizData = useSelector((state) => state.quiz.data);

  // Get the current question's index
  const currentIndex = quizData.questions.findIndex((q) => q.id === id);

  useEffect(() => {
    setSelectedOption(null);
    setShowAnswer(null);
  }, [id]);

  useEffect(() => {
    dispatch(questionActive(id));
  }, [dispatch, id]);

  useEffect(() => {
    const total = Object.values(marks).reduce((acc, mark) => acc + mark, 0);
    dispatch(setTotalMarks(marks)); // Dispatch marks to Redux

    if (marks[id] !== undefined) {
      // Handle answer submission logic
      if (marks[id] === 4) {
        toast.success("Congratulations, Correct!");
      } else if (marks[id] === -1) {
        toast.error("Wrong Answer");
      } else {
        toast.error("No answer selected. Score will be 0.");
      }
    }
  }, [marks, dispatch, id]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const SubmitAnswer = () => {
    if (selectedOption) {
      setMarks((prevMarks) => {
        const newMarks = {
          ...prevMarks,
          [id]: selectedOption.is_correct ? 4 : -1,
        };
        return newMarks;
      });

      if (!selectedOption.is_correct) {
        setShowAnswer(detailed_solution);
      }
    } else {
      setMarks((prevMarks) => ({
        ...prevMarks,
        [id]: 0,
      }));
      setShowAnswer(detailed_solution);
    }
  };

  useEffect(() => {
    if (currentIndex === quizData.questions.length - 1) {
      navigate("/"); // Navigate after last question
    }
  }, [currentIndex, quizData.questions.length, navigate]);

  return (
    <div className="w-[350px] md:w-[750px] p-6 rounded-lg bg-red-200 shadow-lg mx-auto mt-10">
      <div className="mb-4">
        <h1 className="text-lg font-bold text-indigo-800">{topic}</h1>
        <h3 className="text-gray-700 text-md font-semibold mt-2">
          Question: {description?.replace(/:/g, " ?")}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-blue-100 p-4 rounded-xl">
        {options?.map((item, index) => (
          <label
            key={index}
            onClick={() => handleOptionChange(item)}
            className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:bg-indigo-100 transition cursor-pointer"
          >
            <input
              type="radio"
              name={`question-${id}`}
              className="cursor-pointer"
              checked={selectedOption?.id === item.id}
              onChange={() => handleOptionChange(item)}
            />
            <span className="text-black">{item.description}</span>
          </label>
        ))}
      </div>

      {showAnswer && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg">
          <h4 className="text-sm font-semibold text-indigo-600">Solution:</h4>
          <p className="text-gray-700">{detailed_solution}</p>
        </div>
      )}

      <div className="w-full flex mt-10 items-center justify-center">
        <button
          disabled={marks[id] !== undefined}
          className={`px-4 py-2 ${marks[id] !== undefined ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} rounded-lg text-white`}
          onClick={SubmitAnswer}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
