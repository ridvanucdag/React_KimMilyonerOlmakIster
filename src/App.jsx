import React, { useEffect, useMemo, useState } from 'react'
import Question from './components/Question'
import Timer from './components/Timer'
import Login from './components/Login'
import dataquestion from './json/question.json'
import "./style.css"

function App() {
  const [username, setUsername] = useState(null)
  const [question, setQuestion] = useState(1)
  const [stop, setStop] = useState(false)

  const [earned, setEarned] = useState("0 TL")

  const data = dataquestion.data

  const moneyList = useMemo(() =>
    [
      {
        id: 1,
        number: "100 TL"
      },
      {
        id: 2,
        number: "200 TL"
      },
      {
        id: 3,
        number: "300 TL"
      },
      {
        id: 4,
        number: "500 TL"
      },
      {
        id: 5,
        number: "1.000 TL"
      },
      {
        id: 6,
        number: "2.000 TL"
      },
      {
        id: 7,
        number: "4.000 TL"
      },
      {
        id: 8,
        number: "8.000 TL"
      },
      {
        id: 9,
        number: "16.000 TL"
      },
      {
        id: 10,
        number: "32.000 TL"
      },
      {
        id: 11,
        number: "64.000 TL"
      },
      {
        id: 12,
        number: "125.000 TL"
      },
      {
        id: 13,
        number: "250.000 TL"
      },
      {
        id: 14,
        number: "500.000 TL"
      },
      {
        id: 15,
        number: "1 MİLYON TL"
      }
    ].reverse(), [])

  useEffect(() => {
    question > 1 && setEarned(moneyList.find(m => m.id === question - 1).number)
  }, [moneyList, question])

  return (
    <div className='app'>
      {username ? (
        <>      <div className="main">
          {stop ? (<h1 className='endText'>Toplam Kazancınız : {earned} </h1>
          ) : (
            <>
              <div className="top">
                <div className="timer"><Timer setStop={setStop} question={question} /></div>
              </div>
              <div className="bottom">
                <Question data={data} setStop={setStop} question={question} setQuestion={setQuestion} />
              </div>

            </>
          )}
        </div>
          <div className="pyramid">
            <ul className='moneyList'>
              {moneyList.map((mony, index) => (
                <li className={question === mony.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className='moneyListItemNumber'>{mony.id}</span>
                  <span className='moneyListItemAmount'>{mony.number}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Login setUsername={setUsername} />}

    </div>
  )
}

export default App