import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [gender, setGender] = useLocalStorage('gender', 'men');
  const [answers, setAnswers] = useLocalStorage('answers', []);
  const [results, setResults] = useLocalStorage('results', null);
  const [quizInProgress, setQuizInProgress] = useLocalStorage('quizInProgress', false);

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

    // Debug information
    console.log("Calculating results with answers:", answers);
    console.log("Questions:", questions);

    // Make sure we have answers
    if (!answers || answers.length === 0) {
      console.error("No answers to calculate results from");
      return [];
    }

    // Count scores for each category
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && question.options && question.options[answer.choice]) {
        const category = question.options[answer.choice].category;
        if (categories.hasOwnProperty(category)) {
          categories[category] += 1;
        }
      }
    });

    console.log("Category scores:", categories);

    // Sort categories by score (highest first)
    const sortedResults = Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .map(([category, score]) => ({ category, score }));

    console.log("Sorted results:", sortedResults);

    // Save results and end quiz
    setResults(sortedResults);
    setQuizInProgress(false);

    // Make sure localStorage is updated immediately
    window.localStorage.setItem('results', JSON.stringify(sortedResults));
    window.localStorage.setItem('quizInProgress', JSON.stringify(false));

    return sortedResults;
  };

  const startQuiz = () => {
    resetQuiz();
    setQuizInProgress(true);
    // Force update localStorage
    window.localStorage.setItem('quizInProgress', JSON.stringify(true));
  };

  const resetQuiz = () => {
    setAnswers([]);
    setResults(null);
    setQuizInProgress(false);
    // Force update localStorage
    window.localStorage.setItem('answers', JSON.stringify([]));
    window.localStorage.setItem('results', JSON.stringify(null));
    window.localStorage.setItem('quizInProgress', JSON.stringify(false));
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
      resetQuiz,
      setQuizInProgress
    }}>
      {children}
    </UserContext.Provider>
  );
};