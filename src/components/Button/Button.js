import PropTypes from 'prop-types'

const Button = ( { color, btnText, onClick } ) => {
  return (
    <button
      style= {{backgroundColor: color}}
      onClick={onClick}
      className='btn'
    >
      {btnText}
    </button>
  )
}

Button.prototypes = {
  color: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button