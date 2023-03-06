
import { useEffect, useState } from 'react';
import './index.css';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function App() {

  

  const [questionID, setQuestionID] = useState("AreaUnderTheCurve_901")
  const [data, setData] = useState(null)
  const [number, setNumber] = useState(1)

  let obj = {
    id1: "AreaUnderTheCurve_901",
    id2: "BinomialTheorem_901",
    id3: "DifferentialCalculus2_901"
  }

 

  useEffect(() => {
    fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionID}`)
      .then((response) => response.json())
      .then((data) => setData(data))
    console.log(data);
  }, [questionID])

  return (
    <div className='app'>
      <h1>Mathemtics Class</h1>
      {data && <div className='container'>
        <MathJaxContext>
          <MathJax>
            <div className='question'>
              <h3>Question  :{data[0].Question}</h3>
            </div>
            <div className='details'>
              <div className='detail-1'>Chapter: {data[0].ChapterID}</div>
              <div className='detail-1'>Difficulty: {data[0].Difficulty}</div>
              <div className='detail-1'>ExpectedTime: {data[0].ExpectedTime}</div>
              <div className='detail-1'>Step1Timer: {data[0].Step1Timer}</div>
              <div className='detail-1'>Step2Timer: {data[0].Step2Timer}</div>
              <div className='detail-1'>Step3Timer: {data[0].Step3Timer}</div>
              <div className='detail-1'>Step4Timer: {data[0].Step4Timer}</div>
              <div className='detail-1'>Step5Timer: {data[0].Step5Timer}</div>
            </div>
          </MathJax>
        </MathJaxContext>
      </div>}
      <div className='btns'>
        <button onClick={() => setQuestionID(obj.id1)}>1</button>
        <button className='sec-btn' onClick={() => setQuestionID(obj.id2)}>2</button>
        <button onClick={() => setQuestionID(obj.id3)}>3</button>
      </div>
    </div>
  );
}

export default App;



// https://warm-kitsune-a3a05f.netlify.app