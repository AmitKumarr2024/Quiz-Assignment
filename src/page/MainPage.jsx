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
      const API_URL = "https://corsproxy.io/?https://api.jsonserve.com/Uw5CrX"; // New proxy
      const response = await axios.get(API_URL);
      dispatch(allData(response.data));
    } catch (error) {
      toast.error("Failed to fetch data. Try again later!");
      console.error("Fetch Error:", error);
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
