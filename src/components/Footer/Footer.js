import '../Footer/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p className="about"><strong><Link to='/about'>About</Link></strong></p>
    </footer>
  )
}

export default Footer