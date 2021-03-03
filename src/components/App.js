import React,{useState} from "react";
import "../styles.css";
import quiz from "../quiz";

function App() {
const [quizArray , setArray] =  useState(quiz);
// const [question,setQuestion] = useState(0);
// const [score, setScore] = useState(0);




  return (
    <div class="container">
        <div>
      {
        quizArray.map((quizz)=>{
          return (<div className="card">
            <h4>{quizz.question}</h4>,
            <p>Options: {quizz.options}</p>
          </div>) 
        })


      
      }
      <button className="button">save</button><button className="button">next</button>
      </div>
      </div>
     
    
  );
}

export default App;



