import CustomButton from '../global/CustomButton'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

const RightSide = ({onClick,toggleTheme, isDarkMode, label}) => {

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        onClick={toggleTheme}
        type="button"
        className="
          relative rounded-full mx-3 p-1 
          bg-secondary 
          text-secondarytext 
          hover:text-white 
          hover:bg-secondaryhover
          dark:bg-secondary 
          dark:text-secondarytext 
          dark:hover:text-white 
          dark:hover:bg-secondaryhover " >
        {isDarkMode 
          ? <SunIcon className="size-6 p-0.5" aria-hidden="true" />
          : <MoonIcon className="size-6 p-0.5" aria-hidden="true" />
        }  
      </button>
      
      <CustomButton 
        text={label} 
        primary 
        onClick={onClick}
        />
    </div>
  )
}

RightSide.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  toggleTheme: PropTypes.func,
  isDarkMode: PropTypes.bool
}

export default RightSide
