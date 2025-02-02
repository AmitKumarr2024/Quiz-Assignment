import { createSlice } from "@reduxjs/toolkit";

// Retrieve player name from localStorage
const initialState = {
  name: localStorage.getItem("Name") || "",
  score: localStorage.getItem("Score") || "0",
  questionSkip: localStorage.getItem("Skip-Question") || "0",
};

const playerSlice = createSlice({
  name: "playerName",
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("Name", action.payload); // Save the player name to localStorage
    },
    setPlayerScore: (state, action) => {
      state.score = action.payload;
      localStorage.setItem("Score", action.payload); // Save the player name to localStorage
    },
    setPlayerQuestionSkip: (state, action) => {
      state.score = action.payload;
      localStorage.setItem("Skip-Question", action.payload); // Save the player name to localStorage
    },
  },
});

export const { setPlayerName } = playerSlice.actions;

export default playerSlice.reducer;
