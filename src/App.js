import React from 'react';
import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({step,questions}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {step} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, setStep}) {
  const [trueAnswer, setTrueAnswer] = React.useState(0)
  

  const onChangeStep = (index) => {
    setStep(step + 1)
    if (index === question.correct){
      setTrueAnswer(trueAnswer + 1)
      console.log(trueAnswer)
    }
  }


  return (
    <>
      <div className="progress">
        <div style={{ width: `${step/questions.length*100}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => 
            <li onClick={() => onChangeStep(index)} key={text}>{text}</li>
          )
        }
      </ul>
    </>
  );
}

function App() {
  const[step, setStep] = useState(0)
  
  const question = questions[step]

  return (
    <div className="App">
      {
        step != questions.length ? <Game step={step} question={question} setStep={setStep}/> : <Result step={step} questions={questions}/>
      }
      
    </div>
  );
}

export default App;
