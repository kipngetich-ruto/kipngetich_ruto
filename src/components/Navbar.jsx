import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import {nav_links} from './data'
import { useEffect, useState } from "react"

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
    
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setSticky(true);
          } else {
            setSticky(false);
          }
    }
    
    
  return (
    <nav className={sticky ? 'sticky': ''}>
        <div>
            <Link to='/' className="nav-b">
                <img src="/img/profile.png" alt="Logo" className="nav-b-img" /> <span className="nav-b-txt">Ruto</span>
            </Link>
        </div>
        <ul className={showMenu ? 'navbar-nav active' :'navbar-nav'}>
            {nav_links.map((item)=>(
                <li key={item.id}>
                    <HashLink to={item.path} className='nav-item' smooth>
                        {item.name}
                    </HashLink>
                </li>
            ))}
            <li><a href="/Kipngetich_Ruto_Resume.pdf" className="btn" target="_blank" rel="noreferrer"><span>Download</span> Resume</a></li>
        </ul>
        <span className="toggle-icon" onClick={()=> setShowMenu(!showMenu)}><ion-icon name={showMenu ? "close-outline": "menu-outline"}></ion-icon></span>
    </nav>
  )
}

export default Navbar