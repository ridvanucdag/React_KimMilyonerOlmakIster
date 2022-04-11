import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import play from "../image/play.mp3"
import correct from "../image/correct.mp3"
import wrong from "../image/wrong.mp3"


function Question({ data, setStop, question, setQuestion }) {

    const [questionAnswer, setQuestionAnswer] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")
    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        letsPlay()
    }, [letsPlay])

    useEffect(() => {
        setQuestionAnswer(data[question - 1])
    }, [data, question])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)
    }

    const handleClick = (answer) => {
        setSelectedAnswer(answer)
        setClassName("answer active")
        delay(1000, () =>
            setClassName(answer.correct ? "answer correct" : "answer wrong")
        )
        delay(5000, () => {
            if (answer.correct) {
                correctAnswer()
                delay(1000, () => {
                    setQuestion((prev) => prev + 1)
                    setSelectedAnswer(null)
                })
            }
            else {
                wrongAnswer()
                delay(1000, () => {
                    setStop(true)
                })
            }
        }
        )
    }

    return (
        <div className='question'>
            <div className="questionTitle">{questionAnswer?.question}</div>
            <div className="answers">
                {questionAnswer?.answers.map((answer) => (
                    <div className={selectedAnswer === answer ? className : "answer"} onClick={() => handleClick(answer)}>{answer.text}</div>
                ))}
            </div>
        </div>

    )
}

export default Question