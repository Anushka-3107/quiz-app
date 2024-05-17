import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './Components/Quiz';
import QuizQuestion from './Components/QuizQuestion';
import QuizScore from './Components/QuizScore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/QuizQuestion" element={<QuizQuestion />} />
        <Route path='/QuizScore' element={<QuizScore />} />
      </Routes>
    </Router>
  );
}

export default App;
