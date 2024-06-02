import PropTypes from 'prop-types'

const CustomButton = ({text, primary, fullWidth, large, ...props}) => {
  return (
    <button
      type="button"
      className={`
       ${primary 
          ? "bg-primary text-primarytext hover:bg-primaryhover focus-visible:outline-primary" 
          : "bg-secondary text-secondarytext hover:bg-secondaryhover focus-visible:outline-secondary"
        }
        ${fullWidth ? "w-full" : ""}
        ${large ? "px-12 py-3.5" : "px-2.5 py-1.5"} 
        rounded-sm text-sm font-semibold focus-visible:outline focus-visible:outline-2 shadow-sm focus-visible:outline-offset-2
      `}
      {...props}  >
      {text}
    </button>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  large: PropTypes.bool,
}

export default CustomButton
