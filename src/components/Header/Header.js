import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Header.css'

const Header = ( { title } ) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        color='red'
        text= 'Add Task'
        // onClick= {}
      />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;