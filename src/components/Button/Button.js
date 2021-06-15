import PropTypes from 'prop-types'

const Button = ( { color, btnText, onClick, btnClassName } ) => {
  return (
    <button
      style={{backgroundColor: color}}
      onClick={onClick}
      className={btnClassName}
    >
      {btnText}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  btnClassName: PropTypes.string
}

export default Button