import { DisclosurePanel } from '@headlessui/react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Navigation = ({data, className}) => {
  return(
    <>
      {data.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) =>
            `${isActive 
              ? 'text-primary dark:text-primarylight' 
              : 'text-dark dark:text-light'
            } 
            p-2 font-medium text-sm
            ${className}`
          }>
          {item.name}
        </NavLink>
      ))}
    </>
  )
}

const AppMenu = ({data, className, mobile}) => {
  return (
    <>
      {mobile 
        ? 
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Navigation data={data} className={className} />
            </div>
          </DisclosurePanel>
        : 
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Navigation data={data} className={className} />
            </div>
          </div>
      }
    </>
  )
}

Navigation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  mobile: PropTypes.bool
}

AppMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  mobile: PropTypes.bool
}

export default AppMenu
