import { useParams, useNavigate} from "react-router-dom"
import quizQuestions from "../assets/data/data.json"
import { useState, useEffect } from "react";

import Option from "../component/Option";
import htmlIcon from "../assets/img/html-icon.png";
import cssIcon from "../assets/img/css-icon.png";
import jsIcon from "../assets/img/javascript-icon.png";
import accessIcon from "../assets/img/accessibility-icon.png";

const iconObject={
    HTML: htmlIcon,
    CSS: cssIcon,
    JavaScript: jsIcon,
    ReactJS: accessIcon
}
const optionObj ={A: 0, B: 1, C: 2, D:3};
const Questions = () => {
    const params = useParams();
    const navigate = useNavigate();
    const questions= quizQuestions[params.subject];
    const[questionIndex, setQuestionIndex]= useState(0);
    const [currentActive, setCurrentActive]= useState("");
    const[score, setScore] = useState(0);

    

    const submitAnswer = () => {
        if(!currentActive){
            return alert("Select an option");
        }
        const selectedOption = questions[questionIndex]["options"][optionObj[currentActive]];
        if(selectedOption === questions[questionIndex].answer) {
            console.log("Score!!!");
            
            setScore(currentScore => currentScore + 1)
        }

        if (questionIndex >= 9) {
            window.sessionStorage.setItem("score",score);
            window.sessionStorage.setItem("last-quiz",params.subject);
            return navigate("/result");
        }

        setQuestionIndex((currentIndex) => currentIndex + 1);
        setCurrentActive("");
    }

   

    useEffect(() => {
        window.sessionStorage.removeItem("score");
        window.sessionStorage.removeItem("last-quiz");
    }, [])
   
    return (
        <main>
            <div className="flex question-header">
                <img src={iconObject[params.subject]} alt={"Accessibility"}  className="subject-icon"/>
                <p>{params.subject}</p>
            </div>

            <div className="flex">
                <section id="question">
                    <p>Question {questionIndex + 1} 0f 10</p>
                    <h3> {questions[questionIndex].question} </h3>
                    <div id="progress-bar">
                        <div style={{width: ((questionIndex + 1) * 10) + "%"}}></div>
                        </div>
                </section>
                <section>                 
                        <Option
                         option={"A"} optionText={questions[questionIndex].options[0]}
                          setActive={setCurrentActive}
                           active={currentActive}
                           />
                        <Option
                         option={"B"} optionText={questions[questionIndex].options[1]}
                         setActive={setCurrentActive}
                          active={currentActive}
                          />
                        <Option 
                        option={"C"} optionText={questions[questionIndex].options[2]}
                         setActive={setCurrentActive}
                          active={currentActive}
                           />
                        <Option
                         option={"D"} optionText={questions[questionIndex].options[3]}
                         setActive={setCurrentActive} 
                         active={currentActive} 
                         />
                        
                            
                             <button id="submit" onClick={submitAnswer}>{questionIndex < 9 ? "Submit Answer" : "Quiz Completed"}
                             </button>
                        
                        
                        
                </section>
            </div>
        </main>
    )
}

export default Questions;