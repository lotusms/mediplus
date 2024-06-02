import PropTypes from 'prop-types'

const FormGroup = ({name, label, type, onChange, textarea, textareacontent, placeholder}) => {
  return (
    <div className="mt-5 sm:mt-6">
      <label htmlFor={name} className="block text-sm font-medium mb-1 
      text-dark dark:text-light"> {label} </label>
      {textarea 
        ? <textarea 
          type={type} 
          id={name} 
          name={name} 
          onChange={onChange}
          autoComplete='new-password'
          className="block w-full h-36 px-3 py-2 rounded-md shadow-sm sm:text-sm
          bg-darkwhite dark:bg-darker 
          text-dark dark:text-light
          placeholder-lightgray dark:placeholder-darkgray" 
          placeholder={placeholder ? placeholder : ""}> 
            {textareacontent}
          </textarea>
        :<input 
          type={type} 
          id={name} 
          name={name} 
          onChange={onChange}
          autoComplete='new-password'
          className="block w-full px-3 py-2 rounded-md shadow-sm sm:text-sm
          bg-darkwhite dark:bg-darker 
          text-dark dark:text-light
          placeholder-lightgray dark:placeholder-darkgray" 
          placeholder={placeholder ? placeholder : ""} />
      }
      
    </div>
  )
}

FormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
  textareacontent: PropTypes.string
}

export default FormGroup
