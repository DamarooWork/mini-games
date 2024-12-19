import { useEffect, useState } from 'react'
import '../styles/aimgame.css'

export default function AimTrainingPage() {
  document.body.style.overflow = 'hidden'
  const [time, setTime] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [start, setStart] = useState<boolean>(false)
  function handleStart(e: any) {
    e.preventDefault()
    document.querySelectorAll('.screen')[0].classList.add('up')
  }
  function handleTime() {
    setTime(5)
    document.querySelectorAll('.screen')[1].classList.add('up')
    setStart(true)
  }
  useEffect(() => {
    const intervalId = setInterval(decreaseTime, 1000)
    createRandomCircle()
    return () => {
      clearInterval(intervalId)
    }
  }, [start === true])
  function handleBoardClick(e: Event) {
    if (
      e.target !== null &&
      (e.target as HTMLElement).classList.contains('circle')
    ) {
      setScore((prev) => ++prev)
      ;(e.target as HTMLElement).remove()
      createRandomCircle()
    }
  }

  function decreaseTime() {
    setTime((prev) => --prev)
  }

  function createRandomCircle() {
    const board: HTMLElement | null = document.querySelector('#board')
    if (board !== null) {
      const circle = document.createElement('div')
      const size = getRandomNumber(10, 60)
      const { width, height } = board.getBoundingClientRect()
      const x = getRandomNumber(0, height - size)
      const y = getRandomNumber(0, width - size)
      const color = gerenerateRandomColor()
      circle.style.background = color
      circle.classList.add('circle')
      circle.style.width = `${size}px`
      circle.style.height = `${size}px`
      circle.style.top = `${y}px`
      circle.style.left = `${x}px`
      board.append(circle)
    }
  }

  function gerenerateRandomColor() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
  }

  function getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min)
  }
  function handleRestart() {
    window.location.reload()
  }
  return (
    <>
      <div className="screen">
        <h1 className="mb-4">Aim Training</h1>
        <button
          className="time-btn py-4 px-6 start rounded-lg text-3xl"
          id="start"
          onClick={handleStart}
        >
          Start the game
        </button>
      </div>

      <div className="screen">
        <h1>Choose time</h1>
        <ul className="time-list" id="time-list">
          <li>
            <button
              className="time-btn text-3xl py-4 px-6   rounded-lg"
              data-time="5"
              onClick={() => {
                handleTime()
              }}
            >
              5 sec
            </button>
          </li>
          <li>
            <button
              className="time-btn py-4 px-6  rounded-lg"
              data-time="10"
              onClick={() => {
                handleTime()
                setTime(10)
              }}
            >
              10 sec
            </button>
          </li>
          <li>
            <button
              className="time-btn py-4 px-6  rounded-lg"
              data-time="20"
              onClick={() => {
                handleTime()
                setTime(20)
              }}
            >
              20 sec
            </button>
          </li>
          <li>
            <button
              className="time-btn py-4 px-6  rounded-lg"
              data-time="30"
              onClick={() => {
                handleTime()
                setTime(30)
              }}
            >
              30 sec
            </button>
          </li>
        </ul>
      </div>

      <div className="screen">
        {time <= 0 && (
          <div className="text-5xl text-blue-200 flex flex-col items-center">
            <h2 className="mb-5">
              Your score: <b className="text-green-500">{score}</b>
            </h2>
            <p className="mb-7">Well played!</p>
            <button
              onClick={() => handleRestart()}
              className="time-btn rounded-lg py-6 px-8 bg-white text-gray-700 hover:cursor-pointer transform-3d rotate-x-51 rotate-z-43 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl  active:bg-blue-300"
            >
              New game
            </button>
          </div>
        )}
        {time > 0 && (
          <>
            <h3 className="mb-4 text-4xl text-blue-200">
              Time remaining:{' '}
              <span id="time">00:{time < 10 ? `0${time}` : time}</span>
            </h3>
            <div
              className="board"
              id="board"
              // @ts-ignore
              onClick={handleBoardClick}
            ></div>
          </>
        )}
      </div>
    </>
  )
}
