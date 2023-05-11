import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const navs = [
    {
      id:1,
      name:'Home',
      path: '/'
    },
    {
      id:2,
      name:'About',
      path: '/#about'
    },
    {
      id:3,
      name:'Projects',
      path: '/#projects'
    },
    {
      id:4,
      name:'Contact',
      path: '/#contact'
    }
  ]
  const [showMenu, setShowMenu] = useState(false)
  // Used to toggle navbar on the smaller devices

  return (
    <nav className="flex py-2 px-[7%] text-black items-center justify-between font-bold">
      <div className=" flex">
        {/* <img src="./img/profile.png" alt="" className="h-8 border rounded-full mr-2" />
        <span className=" font-light">Kipngetich</span> */}
        <p className="">KR.dev</p>
      </div>
      <div className={ showMenu ? 
      'md:static absolute bg-[#fff] md:min-h-fit min-h-[28vh] mt-0 top-[9%] right-0 md:w-auto w-full flex items-end px-5' :
      'md:static absolute bg-[#FEFBEA] md:min-h-fit min-h-[30vh] mt-0 top-[-100%] right-0 md:w-auto w-full flex items-center px-5'}>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[1.5vw] gap-4">
          {navs.map((item) => (
            <li key={item.id} className="">
              <NavLink to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <span className="md:hidden text-3xl" onClick={()=> setShowMenu(!showMenu)}>
      <ion-icon name={showMenu ? 'close-sharp':'menu-sharp'}></ion-icon>
      </span>
    </nav>
  )
}

export default Navbar