import { useEffect, useRef, useState } from 'react'
import '../styles/draganddrop.css'

export default function DragAndDropPage() {
  const [placeholders, setPlaceholders] = useState<NodeListOf<Element>>()
  useEffect(() => {
    setPlaceholders(document.querySelectorAll('.placeholder'))
  }, [])
  const item = useRef<HTMLDivElement>(null)

  item.current?.addEventListener('dragstart', dragstart)
  item.current?.addEventListener('dragend', dragend)

  if (placeholders)
    for (const placeholder of placeholders) {
      placeholder.addEventListener('dragover', dragover)
      placeholder.addEventListener('dragenter', dragenter)
      placeholder.addEventListener('dragleave', dragleave)
      placeholder.addEventListener('drop', dragdrop)
    }

  function dragstart(e: Event) {
    ;(e.target as HTMLElement).classList.add('hold-drag')
    setTimeout(() => (e.target as HTMLElement).classList.add('hide-drag'), 0)
  }

  function dragend(e: Event) {
    ;(e.target as HTMLElement).className = 'item'
  }

  function dragover(e: Event) {
    e.preventDefault()
  }
  function dragenter(e: Event) {
    ;(e.target as HTMLElement).classList.add('hovered-drag')
  }
  function dragleave(e: Event) {
    ;(e.target as HTMLElement).classList.remove('hovered-drag')
  }
  function dragdrop(e: Event) {
    ;(e.target as HTMLElement).classList.remove('hovered-drag')
    if (item.current !== null) {
      ;(e.target as HTMLElement).append(item.current)
    }
  }

  return (
    <div className="draganddrop">
      <div className="row">
        <div className="col-header start-drag text-center  text-3xl ">
          Start
        </div>
        <div className="col-header progress-drag text-center text-3xl">
          In process
        </div>
        <div className="col-header done-drag text-center  text-3xl">Done</div>
      </div>

      <div className="row">
        <div className="placeholder">
          <div className="item" draggable="true" ref={item}>
            Enjoy this site
          </div>
        </div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
      </div>
    </div>
  )
}
