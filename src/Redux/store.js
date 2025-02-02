import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import quizReducer from "./quizSlice";
import playerReducer from "./playerDetails";
import historyReducer from "./historyScore";

// Persist configuration
const persistConfig = {
  key: "quiz", // Key for local storage
  storage,
};

const persistedQuizReducer = persistReducer(
  persistConfig,
  quizReducer,
  historyReducer
);

const Store = configureStore({
  reducer: {
    player: playerReducer,
    quiz: persistedQuizReducer, // Use persisted reducer here
    history: historyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(Store); // Required for persistence
export default Store;
