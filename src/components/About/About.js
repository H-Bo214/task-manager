import Button from '../Button/Button'
import { useHistory } from 'react-router-dom'

import './About.css'
const About = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  return (
    <section>
      <header>
        <h1>Task Manager</h1>
        <Button
          color='#457B9D' 
          btnText='Go Back'
          onClick ={redirect}
        />
      </header>
      <p>The about page</p>
    </section>
  )
}

export default About;