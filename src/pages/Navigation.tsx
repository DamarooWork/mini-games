import { Link } from 'react-router-dom'

export default function Navigation() {
  const classLink: string =
    'bg-white text-black py-2 px-4  rounded-lg  hover:cursor-pointer shadow-gray-200  transform-3d rotate-x-51 rotate-z-43 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl  active:bg-gray-100 '
  return (
    <>
      <nav className="fixed top-0 h-[90px] w-full bg-blue-300 text-white">
        <ul className="flex justify-around h-full  items-center ">
          <div className=" text-white text-4xl font-bold">Minigames:</div>
          <Link to="/mini-games/" className={classLink}>
            Wallpapers
          </Link>
          <Link to="/mini-games/aimtraining" className={classLink}>
            Aim Training
          </Link>
          <Link to="/mini-games/colorgame" className={classLink}>
            Squares Game
          </Link>
          <Link to="/mini-games/slides" className={classLink}>
            Slides
          </Link>
          <Link to="/mini-games/draganddrop" className={classLink}>
            Drag and Drop
          </Link>
        </ul>
      </nav>
    </>
  )
}
