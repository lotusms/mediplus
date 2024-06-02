import PropTypes from 'prop-types'
import React from 'react'

const Text = ({ children, className }) => {
  const renderChildrenWithBreaks = (text) => {
    if (typeof text === 'string') {
      return text.split('\n\n').map((paragraph, pIndex) => (
        <React.Fragment key={pIndex}>
          {paragraph.split('\n').map((line, lIndex) => (
            <React.Fragment key={lIndex}>
              {line}
              {lIndex < paragraph.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
          {pIndex < text.split('\n\n').length - 1 && <><br /><br /></>}
        </React.Fragment>
      ))
    }
    return text
  }

  return (
    <p className={`text-dark dark:text-darkwhite ${className}`}>
      {renderChildrenWithBreaks(children)}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Text
