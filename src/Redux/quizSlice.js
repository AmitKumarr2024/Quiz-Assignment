import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "Quiz",
  initialState: {
    data: [],
    isQuestionActive: null,
    totalMarks: {},
  },
  reducers: {
    allData: (state, action) => {
      state.data = action.payload;
    },
    questionActive: (state, action) => {
      state.isQuestionActive = action.payload;
    },
    setTotalMarks: (state, action) => {
      console.log("markssss", action.payload);
      state.totalMarks = action.payload;

      // Calculate total score
      const totalScore = Object.values(action.payload).reduce((acc, mark) => acc + mark, 0);
      
      // Store in localStorage
      localStorage.setItem("totalScore", totalScore);
    },
    resetQuiz: (state) => {
      state.totalMarks = {};
      localStorage.removeItem("totalScore"); // Clear localStorage
    },
  },
});

export const { allData, questionActive, setTotalMarks,resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
