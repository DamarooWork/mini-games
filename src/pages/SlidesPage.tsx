import { useEffect, useRef } from 'react'
import '../styles/slides.css'

const mainImages = [
  {
    id: 1,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1576208260298-a6819b8af2b2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundColor: 'linear-gradient(229.99deg, #6da865 -26%, #5eb45e 145%)',
    htmlTextH1: 'My Fallen Idol',
    htmlTextP: 'Scrubs',
  },
  {
    id: 2,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1710241426981-bc31856d81a5?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundColor: 'linear-gradient(229.99deg, #d6d6d6 -26%, #dadada 145%)',
    htmlTextH1: 'My Screw Up',
    htmlTextP: 'Scrubs',
  },
  {
    id: 3,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1733213401644-d1fa7c17ba3a?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundColor: 'linear-gradient(215.32deg, #39dcf1 -1%, #51c8f7 124%)',
    htmlTextH1: 'My First Day',
    htmlTextP: 'Scrubs',
  },
  {
    id: 4,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517646331032-9e8563c520a1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundColor: 'linear-gradient(221.87deg, #796703 1%, #c4ab1e 128%)',
    htmlTextH1: 'My Own American Girl',
    htmlTextP: 'Scrubs',
  },
  {
    id: 5,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1732525830182-b0e1a93f3679?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundColor: ' linear-gradient(220.16deg, #c58c46, #6d4100)',
    htmlTextH1: 'My Finale',
    htmlTextP: 'Scrubs',
  },
]

export default function SlidesPage() {
  // const [slidesNumber, setSlidesNumber] = useState(0)
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const sidebar = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const mainSlide = useRef<HTMLDivElement>(null)
  let activeSlideIndex = 0
  // if (mainSlide.current !== null) {
  //   activeSlideIndex = mainSlide.current.querySelectorAll('div').length
  // }
  useEffect(() => {
    if (sidebar.current !== null) {
      sidebar.current.style.top = -window.innerHeight * 4 + 360 + 'px'
    }
  }, [])

  function changeSlide(direction: string) {
    if (direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex === 5) activeSlideIndex = 0
    } else if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0) activeSlideIndex = 4
    }
    const height = container.current?.clientHeight
    // console.log(sidebar.current, mainSlide.current, activeSlideIndex)

    if (height && mainSlide.current !== null) {
      mainSlide.current.style.transform = `translateY(-${
        activeSlideIndex * height
      }px)`
    }

    if (height && sidebar.current !== null) {
      sidebar.current.style.transform = `translateY(${
        activeSlideIndex * height
      }px)`
    }
  }
  return (
    <div className="slides-container" ref={container}>
      <div className="slides-sidebar" ref={sidebar}>
        {mainImages.map((image) => {
          return (
            <div key={image.id} style={{ background: image.backgroundColor }}>
              <h1 className="text-5xl">{image.htmlTextH1}</h1>
              <p className="text-3xl">{image.htmlTextP}</p>
            </div>
          )
        })}
      </div>
      <div className="main-slide" ref={mainSlide}>
        {mainImages.map((image) => {
          return (
            <div
              key={image.id}
              style={{ backgroundImage: image.backgroundImage }}
            ></div>
          )
        })}
      </div>
      <div className="controls">
        <button
          className="slide-button down-button"
          onClick={() => changeSlide('down')}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVR4nO2WSwqAMAwF5xIWvf9N3IiiG114nIgQIYjopsYPGQgtpHTIo4vCB2mB5gmxaIX4diSi9kIiai8kovZCImovJKL2Qn4ddQ30QDoRJz2T9QPYqWQycitO2hM9m40CGPXiGaiMeN8ryUwyU22r3ds0slOY6WzdMumV3EWKskY6HLz097MAVHxQnvJldZsAAAAASUVORK5CYII="
            alt="long-arrow-down"
          />
        </button>
        <button
          className="slide-button up-button"
          onClick={() => changeSlide('up')}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nO2QQQqDMBQF5xKK3v8muiio3dSFx3lFSCAEd+qTlj8Q8iGB4Q/8GC3wTmefLTTAB1A6G9C7pXLIW2BNonyX83pH9qbYdN+uK8T126WbzwdbZXFdY7pS/AKWKmUpzvIl/b0VVWIbCrELRWoXitQuFKldKFK7UKT++9QjMDwhPsUXiE5QnJH8RUAAAAAASUVORK5CYII="
            alt="long-arrow-up"
          />
        </button>
      </div>
    </div>
  )
}
