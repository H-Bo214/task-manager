import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Header.css'

const Header = ( { title, displayAddTask, showForm } ) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        color={displayAddTask ? '#E63946' : '#457B9D'}
        btnText={displayAddTask ? 'Close' : 'Add Task'}
        onClick= {showForm}
      />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  displayAddTask: PropTypes.bool,
  showForm: PropTypes.func,
}

export default Header;