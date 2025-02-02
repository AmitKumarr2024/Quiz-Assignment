import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { allData } from "../Redux/quizSlice";
import QuizBox from "../components/QuizBox";
import SideProfileBar from "../components/SideProfileBar";

const MainPage = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await axios.get("/api");
      const dataResponse = response;
      console.log("dataResponse", dataResponse.data);
      dispatch(allData(dataResponse.data));
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-slate-200 h-full flex flex-wrap md:h-screen justify-center gap-6">
        <SideProfileBar />
        <QuizBox />
      
      </div>
    </>
  );
};

export default MainPage;
