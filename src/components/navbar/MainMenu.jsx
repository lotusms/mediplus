import PropTypes from 'prop-types'

const MainMenu = ({navigation}) => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={
              `
                ${item.current 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                },
                'rounded-md px-3 py-2 text-sm font-medium'
              `
            }
            aria-current={item.current ? 'page' : undefined}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}

MainMenu.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    current: PropTypes.bool
  })).isRequired
}

export default MainMenu
