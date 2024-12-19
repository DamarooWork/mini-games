import { useEffect, useState } from 'react'
import '../styles/wallpapers.css'
const slidesArray = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gifts',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1480618757544-81c31930008e?q=80&w=2627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Decoration',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1480930700499-dc44aa7cb2cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Door',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1483373018724-770a096812ff?q=80&w=2699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Street lamp',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1522448746354-da4936934201?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Candle',
  },
]

export default function WallpapersPage() {
  const [slides, setSlides] = useState<Element[]>([])

  useEffect(() => {
    setSlides([...document.querySelectorAll('.slide')])
  }, [])

  function clearActiveSlides() {
    slides.forEach((slide: Element) => {
      slide.classList.remove('active')
    })
  }
  function handleClick(slide: {
    currentTarget: { classList: { add: (arg0: string) => void } }
  }) {
    clearActiveSlides()

    slide.currentTarget.classList.add('active')
  }
  return (
    <>
      <div className="my-container">
        {slidesArray.map((slide, i) => {
          return (
            <div
              key={slide.id}
              className={i === 0 ? 'slide active' : 'slide'}
              style={{
                backgroundImage: `url(${slide.url})`,
              }}
              onClick={handleClick}
            >
              <h3>{slide.name}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}
