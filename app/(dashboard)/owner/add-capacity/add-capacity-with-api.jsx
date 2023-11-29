// YourComponent.js

import { useState } from 'react';

const YourComponent = () => {
  const [step, setStep] = useState(1);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

  // Fetch initial questions when the component mounts
  useEffect(() => {
    const fetchInitialQuestions = async () => {
      const response = await fetch(`/api/getQuestions?step=${step}`);
      const initialQuestionsAndAnswers = await response.json();
      setQuestionsAndAnswers(initialQuestionsAndAnswers);
    };

    fetchInitialQuestions();
  }, [step]);

  // Function to update answers
  const updateAnswer = (questionIndex, newAnswer) => {
    // Update the state to reflect the new answer
    const updatedQuestionsAndAnswers = [...questionsAndAnswers];
    updatedQuestionsAndAnswers[questionIndex].answer = newAnswer;
    setQuestionsAndAnswers(updatedQuestionsAndAnswers);
  };

  // Function to handle the API call and save data
  const saveDataToDB = async () => {
    // Make an API call to save questionsAndAnswers to the backend
    // You can use fetch or any library you prefer
    const response = await fetch('/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ questionsAndAnswers }),
    });

    // Handle the response as needed
    // Maybe update the UI based on success or failure
  };

  // Function to handle the "Next" button click
  const handleNext = async () => {
    // Save the current set of answers to the backend
    await saveDataToDB();

    // Increment the step
    setStep(step + 1);

    // Fetch new questions for the next step
    const response = await fetch(`/api/getQuestions?step=${step + 1}`);
    const newQuestionsAndAnswers = await response.json();

    // Update the state with the new questions and answers
    setQuestionsAndAnswers(newQuestionsAndAnswers);
  };

  return (
    <div>
      {/* Render your questions and input fields based on the current step */}
      {questionsAndAnswers.map((qa, index) => (
        <div key={index}>
          <h2>{qa.question}</h2>
          <input
            type="text"
            value={qa.answer || ''}
            onChange={(e) => updateAnswer(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default YourComponent;
