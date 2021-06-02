import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Header.css'

const Header = ( { title, displayAddTask, showForm } ) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        color={displayAddTask ? 'red' : 'green'}
        text={displayAddTask ? 'Close' : 'Add Task'}
        onClick= {showForm}
      />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;