import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "HistoryScore",
  initialState: {
    data: [],
  },
  reducers: {
    // Appends new history data to the existing array, filtering by Id
    setHistoryScore: (state, action) => {
      console.log("New History", action.payload);
      
      // Filter out existing history by Id to avoid duplicates
      const newHistory = action.payload.filter(newEntry => 
        !state.data.some(existingEntry => existingEntry.Id === newEntry.Id)
      );

      // Append filtered new history data to the existing data in Redux state
      state.data = [...state.data, ...newHistory];

      // Update localStorage with the new history
      localStorage.setItem("leaderboardHistory", JSON.stringify(state.data));
    },
    // Load history from localStorage to Redux state
    loadHistoryFromStorage: (state) => {
      const storedHistory = localStorage.getItem("leaderboardHistory");
      if (storedHistory) {
        state.data = JSON.parse(storedHistory); // Parse and store in Redux state
      }
    },
  },
});

export const { setHistoryScore, loadHistoryFromStorage } = historySlice.actions;
export default historySlice.reducer;
