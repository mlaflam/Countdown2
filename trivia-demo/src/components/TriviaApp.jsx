import React, { useState, useEffect } from 'react';

const TriviaApp = () => {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://opentdb.com/api.php?amount=10&token=2752fe39cc232db9706891ef25c4f016f2909821b09155500ae7c3df0b27e641');
        const resultJSON = await result.json();
        setQuestions(resultJSON.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trivia App</h1>
      {questions && questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <div className='answers-container'>
            <div>
              <button>{question.correct_answer}</button>
            </div>
            {question.incorrect_answers.map((answer, index) => (
              <>
              <div>
                <button key={index}>{answer}</button>
              </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TriviaApp;
