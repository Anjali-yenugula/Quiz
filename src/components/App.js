import React,{useState} from "react";
import "../styles.css";
import quiz from "../quiz";


function App(){

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
// const [selectAnswer,setAnswer]=useState(null);


  const nextQuestionClick =() =>{
     if (currentQuestion < quiz.length-1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore("");
    }
  };


// const answerClicked=()=>{
//   if(selectAnswer){
//      setScore(score+1);
//   }else{
//     console.log(false);
//   }
// }

return (

<>
<div className="space" >   
     <div className="card">
          <div ><h3>{quiz[currentQuestion].question}</h3></div>
        </div>
        <div className="card">
          {quiz[currentQuestion].options.map((options) => (
            <button>{options.answer}</button>
          ))}
        </div>
        <div style={{marginLeft:"500px"}}>
        <button>Save</button>
        <button onClick={nextQuestionClick}>Next</button>
        {/* <h4>You scored {score} out of {quiz.length}</h4> */}

        </div>
       
      </div>
  </>
);
}


export default App;



