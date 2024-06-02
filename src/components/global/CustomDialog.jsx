import PropTypes from 'prop-types'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import CustomButton from './CustomButton'

const CustomDialog = ({show, title, onClose, secondaryClick, primaryClick, children}) => {
  return (
    <Transition show={show}>
      <Dialog className="relative z-10" onClose={onClose}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-light dark:bg-darker bg-opacity-85 dark:bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
              <DialogPanel className="relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6
              bg-offwhite dark:bg-dark">
                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 
                  text-dark dark:text-light">
                    {title}
                  </DialogTitle>                      
                </div>
                {children}
                <div className="mt-5 sm:mt-6 flex justify-between">
                  <CustomButton 
                    text="Cancel"                    
                    onClick={secondaryClick}/>
                  <CustomButton 
                    text="Sign in" 
                    primary 
                    onClick={primaryClick}/>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition> 
  )
}

CustomDialog.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  secondaryClick: PropTypes.func,
  primaryClick: PropTypes.func,
  children: PropTypes.node
}

export default CustomDialog
