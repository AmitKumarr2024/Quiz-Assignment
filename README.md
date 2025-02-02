# Quiz App

## 📝 Overview
The **Quiz App** is an interactive web application that allows users to take quizzes, select answers, and receive instant feedback on their performance. It dynamically loads questions, evaluates responses, and calculates total marks.

## 🚀 Features
- 🏆 **Multiple Choice Questions (MCQs)**
- ✅ **Instant Answer Validation** (Correct/Wrong Indication)
- 📊 **Score Calculation & Tracking**
- 🔄 **Automatic Navigation to Next Question**
- 📢 **Real-time Toast Notifications** (Success/Error)
- 📂 **State Management using Redux Toolkit**
- 🎨 **Responsive UI with Tailwind CSS**

## 🛠️ Tech Stack
- **Frontend**: React.js, Redux Toolkit, React Router, Tailwind CSS
- **State Management**: Redux Toolkit
- **Notifications**: react-hot-toast
- **Routing**: React Router

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🖥️ Project Structure
```
quiz-app/
│── src/
│   ├── components/
│   │   ├── QuizCard.jsx
│   │   ├── QuizTestBoard.jsx
│   ├── Redux/
│   │   ├── quizSlice.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## 📌 Usage
1. Select a quiz question from the list.
2. Choose an answer from the available options.
3. Click **Submit** to check your answer.
4. The app will display a success message for correct answers and an error message for incorrect ones.
5. After answering all questions, the app will navigate to the result screen.

## 🛠️ Configuration
If needed, modify the Redux store in `quizSlice.js` to update questions or scoring logic.

## 🎯 Future Enhancements
- ✅ Add a **timer** for each question.
- 📊 Display a **leaderboard** with high scores.
- 🔄 Implement **shuffle questions** feature.
- 🎨 Improve **UI animations**.

## 👨‍💻 Author
- **Amit Kumar** - [GitHub](https://github.com/your-username)

## 📜 License
This project is licensed under the MIT License.

---
🚀 Happy Coding!

