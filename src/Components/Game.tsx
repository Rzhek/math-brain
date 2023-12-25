import React, { useState } from 'react';
import Question, { initQuestion } from '../Types/Question';
import { initChoice } from '../Types/Choice';

const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const getQuestions = (num: number): Question[] => {
  let questions: Question[] = [];
  for (let i = 0; i < num; i++) {
    const question = {...initQuestion};
    const correctChoice = {...initChoice, correct: true};
    const choices: number[] = [];

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.floor(Math.random() * 2);

    if (operator === 0) {
      question.name = `${num1} + ${num2}`;
      correctChoice.name = num1 + num2;
    } else {
      question.name = `${num1} - ${num2}`;
      correctChoice.name = num1 - num2;
    }
    
    choices.push(num1 + num2);
    choices.push(num1 + num2 + 1);
    choices.push(num1 + num2 - 1);
    choices.push(num1 + num2 + 2);
    choices.push(num1 + num2 - 2);
    choices.push(num1 - num1);
    choices.push(num1 - num2);
    choices.push(num1 - num2 + 1);
    choices.push(num1 - num2 - 1);
    choices.push(num1 - num2 + 2);
    choices.push(num1 - num2 - 2);
    choices.push(num2 - num1);
    choices.push(num2 - num1 + 1);
    choices.push(num2 - num1 - 1);
    choices.push(num2 - num1 + 2);
    choices.push(num2 - num1 - 2);
    choices.push(num1 * num2);
    choices.push(num1 * num1);
    choices.push(num2 * num2);
    choices.push(Math.floor(num1 / num2));
    choices.push(Math.ceil(num1 / num2));
    choices.push(Math.floor(num2 / num1));
    choices.push(Math.ceil(num2 / num1));

    shuffle(choices);
    question.choices = [];
    question.choices.push(correctChoice);
    for (let choice of choices) {
      let valid = true;
      for (let existChoice of question.choices) {
        if (existChoice.name === choice) {
          valid = false;
          break;
        }
      }

      if (valid) {
        question.choices.push({name: choice, correct: false});
      }
      if (question.choices.length === 4) {
        break;
      }

    }
    shuffle(question.choices);
    questions.push(question);
  }
  return questions;
}

function Game() {

  const [numQuestions, setNumQuestions] = useState(10);
  const [curQuestion, setCurrentQuestion] = useState(0);
  const questions: Question[] = getQuestions(numQuestions);

  const handleChoice = (e: React.MouseEvent<HTMLElement>, index: number): void => {
    e.preventDefault();
    console.log(questions[curQuestion].choices[index].correct);

    const btn = e.target as HTMLElement;
    btn.classList.remove('hover:bg-amber-500');
    if (questions[curQuestion].choices[index].correct) {
      btn.classList.add("bg-green-500");
    } else {
      btn.classList.add('bg-red-500');
    }
    setTimeout(() => {
      if (curQuestion < questions.length - 1) {
        setCurrentQuestion(cur => cur + 1);
      }
      btn.classList.remove('bg-red-500');
      btn.classList.remove('bg-green-500');
      btn.classList.add('hover:bg-amber-500');
    }, 500);
  }

	return (
    <main className='mt-[10vh] mx-auto h-[70vh] text-center p-4'>
      {
        !questions ? 'Loading...' :
        <>
          <h2 className='text-4xl text-amber-500 font-bold mb-8'>{questions[curQuestion].name}</h2>
          <div className='grid grid-cols-2 gap-8 w-[40%] mx-auto mb-8'>
            {
              questions[curQuestion].choices.map((c, index) => (
                <button 
                  key={index}
                  className='text-2xl py-10 text-[#1f2937] font-bold bg-white rounded-2xl ease-in-out duration-75 hover:bg-amber-500' 
                  onClick={e => handleChoice(e, index)}
                  >{c.name}
                </button>
              ))
            }
          </div>
        </>
      }
      <div className='font-medium text-xl'>{curQuestion + 1} / {numQuestions}</div>
    </main>
  )
}

export default Game;
