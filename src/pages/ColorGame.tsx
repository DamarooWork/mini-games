import { useRef, useState } from 'react'
import '../styles/colorgame.css'

export default function ColorGame() {
  const [renderBtn, setRenderBtn] = useState(true)
  const [number, setNumber] = useState<number>(0)
  const colors: string[] = [
    'IndianRed',
    'LightCoral',
    'Salmon',
    'DarkSalmon',
    'LightSalmon',
    'Crimson',
    'Red',
    'DarkSalmon',
    'FireBrick',
    'DarkRed',
    'LightPink',
    'Pink',
    'HotPink',
    'DeepPink',
    'MediumVioletRed',
    'PaleVioletRed',
    'Coral',
    'Tomato',
    'OrangeRed',
    'DarkOrange',
    'Orange',
    'Gold',
  ]
  const board = useRef<HTMLInputElement>(null)

  function render(e: any) {
    e.preventDefault()
    if (number > 3000 || number < 1) {
      return
    }
    if (board.current !== null) {
      board.current.innerHTML = ''
    }
    setRenderBtn(false)
    for (let i = 0; i < number; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
      square.addEventListener('mouseover', () => {
        setColor(square)
      })
      square.addEventListener('mouseleave', () => {
        removeColor(square)
      })

      board.current?.append(square)
    }
  }

  function setColor(e: HTMLDivElement) {
    const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
  }
  function removeColor(e: HTMLDivElement) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px black`
  }
  function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }
  function newRender() {
    board.current ? (board.current.innerHTML = '') : ''
    setRenderBtn(true)
  }
  return (
    <div className="game pt-28 ">
      {renderBtn && (
        <form onSubmit={render} className="flex flex-col items-center mr-20">
          <input
            required
            pattern="[0-9]*"
            className="text-center w-80 text-xl py-6 px-10 bg-gray-800 text-white rounded-xl mb-4 text-ellipsis"
            type="number"
            min="1"
            max="3000"
            // value={number}
            onChange={(e) => setNumber(+e.target.value)}
            placeholder="Enter amount (1-3000)🖉"
            onSubmit={render}
            id="count"
            name="count"
          />
          <button
            className="w-60 text-2xl py-6 px-8 bg-gray-800 text-white rounded-xl transform-3d rotate-x-51 rotate-z-43 shadow-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-xl  active:bg-gray-600"
            onClick={render}
            type="submit"
          >
            Render squares
          </button>
        </form>
      )}

      <div
        className={
          number < 1000 ? 'colorgame max-w-4xl' : 'colorgame max-w-screen-2xl'
        }
        id="colorgame"
        ref={board}
      ></div>

      {!renderBtn && (
        <button
          onClick={() => newRender()}
          className="fixed bottom-10 right-10 py-2 px-4 bg-blue-200 transform-3d rotate-x-51 rotate-z-43 shadow-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-xl   rounded-full cursor-pointer"
        >
          New render
        </button>
      )}
    </div>
  )
}
