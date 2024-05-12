import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './Components/Quiz';
import QuizQuestion from './Components/QuizQuestion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/QuizQuestion" element={<QuizQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
