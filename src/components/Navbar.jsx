import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import {nav_links} from './data'
import { useEffect, useState } from "react"

const Navbar = () => {
    const [sticky, setSticky] = useState(false)

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
        <ul className="navbar-nav">
            {nav_links.map((item)=>(
                <li key={item.id}>
                    <HashLink to={item.path} className='nav-item' smooth>
                        {item.name}
                    </HashLink>
                </li>
            ))}
            <li><a href="/Kipngetich_Ruto_Resume.pdf" className="btn" target="_blank" rel="noreferrer">Download Resume</a></li>
        </ul>
    </nav>
  )
}

export default Navbar