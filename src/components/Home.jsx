import { NavLink } from "react-router-dom"

const Home = () => {
  const techStack =[{src:'./img/html-5.png',alt:'Html'},{src:'./img/css-3.png',alt:'Css'},{src:'./img/js.png',alt:'Js'},{src:'./img/react.png',alt:'Reactjs'},{src:'./img/tailwindcss.png',alt:'Tailwindcss'},{src:'./img/bootstrap.png',alt:'Bootstrap'}]
  return (
    <main className="md:px-[25%] px-4 md:pt-[10%] pt-4">
      <div className="flex items-center">
        <div className="">
          <h1 className="md:text-3xl text-xl font-extrabold">Front-End Developer</h1>
          <p className="md:text-lg text-sm">
            I am Kipngetich Ruto. A passionate web developer based in Nairobi, Kenya.
          </p>
          <div className="pt-2 ">
            <NavLink to={'https://github.com/R254'} className="text-2xl pr-2">
              <ion-icon name="logo-github"></ion-icon>
            </NavLink>
            <NavLink to={'https://www.linkedin.com/in/kipngetich-ruto-196733120/'} className="text-2xl pr-2">
              <ion-icon name="logo-linkedin"></ion-icon>
            </NavLink>
          </div>
        </div>
        <div className="">
          <img src="./img/profile.png" alt="Profile" className=" md:flex hidden rounded-full w-[400px] border "/>
        </div>
      </div>
      <div className="md:flex py-4 items-center gap-6">
        <h2>Tech Stack </h2><span className="md:flex hidden"> | </span>
        <ul className="md:flex gap-6">
        {techStack.map((item,index) => (
          <li key={index}>
            <img src={item.src} alt={item.alt} className="h-7 w-7 rounded-3xl md:flex hidden"/><span className="md:hidden flex">{item.alt}</span>
          </li>
        ) )}
        </ul>
      </div>
    </main>
  )
}

export default Home