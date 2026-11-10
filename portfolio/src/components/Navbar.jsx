import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
<nav className="navbar">
  <Link className="navbar-logo" to="/">Shivani.</Link>

  <ul className="navbar-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/skills">Skills</Link></li>
    <li><Link to="/education">Education</Link></li>
    <li><Link to="/projects">Projects</Link></li>
  </ul>
</nav>


    </div>
  )
}
