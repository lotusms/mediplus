import PropTypes from 'prop-types'

const Card = ({ title, primary, secondary, ternary, className, children }) => {
  return (
    <div className={`
      ${primary ? "bg-primary" : ""}
      ${secondary ? "bg-secondary" : ""}
      ${ternary ? "bg-light dark:bg-dark " : ""}
      ${className}
      rounded-md shadow-lg p-8 my-3`}>
      <div className={`
        card-content
        ${primary ? " text-white dark:text-white" : ""}
        ${secondary ? "text-secondarytext" : ""}
        ${ternary ? "text-dark dark:text-light" : ""}`}>
        {title && <h4 className={`
          ${className}
          text-lg mb-4`}>
          {title}
        </h4>}
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  ternary: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Card
