import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [gender, setGender] = useState('men'); // Keep gender state
  const [answers, setAnswers] = useLocalStorage('answers', []);
  const [results, setResults] = useLocalStorage('results', null);
  const [quizInProgress, setQuizInProgress] = useState(false);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setResults(null);
  };

  const saveAnswer = (questionId, choice) => {
    setAnswers(prev => {
      // Find if this question was already answered
      const exists = prev.findIndex(a => a.questionId === questionId);

      if (exists !== -1) {
        // Update existing answer
        const updated = [...prev];
        updated[exists] = { questionId, choice };
        return updated;
      } else {
        // Add new answer
        return [...prev, { questionId, choice }];
      }
    });
  };

  const calculateResults = (questions) => {
    const categories = {
      'words': 0,
      'service': 0,
      'gifts': 0,
      'time': 0,
      'touch': 0
    };

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question) {
        const category = question.options[answer.choice].category;
        categories[category] += 1;
      }
    });

    // Sort categories by score (highest first)
    const sortedResults = Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .map(([category, score]) => ({ category, score }));

    setResults(sortedResults);
    setQuizInProgress(false); // Quiz is complete
    return sortedResults;
  };

  const startQuiz = () => {
    resetQuiz();
    setQuizInProgress(true);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setResults(null);
    setQuizInProgress(false);
  };

  return (
    <UserContext.Provider value={{
      user,
      gender,
      answers,
      results,
      quizInProgress,
      login,
      logout,
      setGender,
      saveAnswer,
      calculateResults,
      startQuiz,
      resetQuiz
    }}>
      {children}
    </UserContext.Provider>
  );
};