import Button from '../Button/Button'
import { useHistory } from 'react-router-dom'
import './About.css'

const About = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
}

  return (
    <>
      <header>
        <h1>Task Manager</h1>
        <Button
          color='#457B9D' 
          btnText='Go Back'
          onClick ={redirect}
        />
      </header>
      <p className="about-resource"><strong>This application was made with:</strong></p>
      <ul>
        <li className="resources"><a href="https://reactjs.org/" >React</a></li>
        <li className="resources"><a href="https://reactrouter.com/" >React Router</a></li>
        <li className="resources"><a href="https://preview.npmjs.com/package/react-datepicker" >React DatePicker</a></li>
        <li className="resources"><a href="https://git-scm.com/" >Git</a></li>
        <li className="resources"><a href="https://github.com/" >GitHub</a></li>
        <li className="resources"><a href="https://github.com/H-Bo214/task-manager/projects/1" >GitHub Projects</a></li>
        <li className="resources"><a href="https://www.flaticon.com/authors/vectors-market">Icon from Vectors Market from flaticon</a></li>
        <li className="resources"><a href="https://github.com/typicode/json-server">json-server</a></li>
      </ul>
    </>
  )
}

export default About;