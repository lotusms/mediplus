import { DisclosureButton, DisclosurePanel } from '@headlessui/react'
import PropTypes from 'prop-types'

const MobileMenuPanel = ({navigation}) => {
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            className={`              
              ${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'},
              'block rounded-md px-3 py-2 text-base font-medium'
            `}
            aria-current={item.current ? 'page' : undefined} >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  )
}

MobileMenuPanel.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    current: PropTypes.bool
  })).isRequired
}

export default MobileMenuPanel
