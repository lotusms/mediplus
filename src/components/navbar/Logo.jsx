import PropTypes from 'prop-types'

const Logo = ({logosrc}) => {
  return (
    <div className="flex shrink-0 items-center">
      <img className="h-8 w-auto ml-10 sm:ml-0" src={logosrc} alt="Logo" />
    </div>
  )
}

Logo.propTypes = {
  logosrc: PropTypes.string.isRequired
}

export default Logo