import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import MobileMenuButton from './MobileMenuButton';
import Logo from './Logo';
import logo from '../../assets/images/logo.png';
import logolight from '../../assets/images/logo_white.png';
import AppMenu from './AppMenu';
import RightSide from './RightSide';
import FormGroup from '../global/FormGroup';
import CustomDialog from '../global/CustomDialog';
import { signIn, signOut } from '../../../firebase/auth';
import { useAuth } from '../../context/AuthProvider';
import { auth } from '../../../firebase/firebase';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Private', href: '/private' }
];

const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLoggedIn } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signIn(email, password);
      if (userCredential) {
        console.log('Sign in successful');
        setDialogOpen(false);
      } else {
        throw new Error('User credential is null');
      }
    } catch (error) {
      console.log('Sign in failed:', error.message);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
      })
      .catch((error) => {
        console.log('Sign out failed:', error.message);
      });
  };

  useEffect(() => {
    if (userLoggedIn) {
      console.log('User is logged in');
    } else {
      console.log('User is not logged in');
    }
  }, [userLoggedIn]);

  const filteredNavigation = userLoggedIn
    ? navigation
    : navigation.filter(item => item.name !== 'Private');

  useEffect(() => {
    // Check local storage for theme preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Disclosure as="nav" className="bg-white dark:bg-dark sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <MobileMenuButton handleOpen={open} />
                <Logo logosrc={isDarkMode ? logolight : logo} />
              </div>
              <div>
                <AppMenu data={filteredNavigation} className="" />
              </div>
              <RightSide
                onClick={userLoggedIn ? handleSignOut : () => setDialogOpen(true)}
                label={userLoggedIn ? 'Sign out' : 'Sign in'}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
          <AppMenu data={filteredNavigation} className="flex uppercase font-bold" mobile />
          <CustomDialog
            show={dialogOpen}
            title="Sign in to your account"
            onClose={() => setDialogOpen(false)}
            secondaryClick={() => setDialogOpen(false)}
            primaryClick={handleLogin} >
            <div className="dialog-body">
              <FormGroup
                name="email"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormGroup
                name="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CustomDialog>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
