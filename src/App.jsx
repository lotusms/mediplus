import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import MainLayout from './layouts/MainLayout';
import About from './routes/about/About'
import Home from './routes/home/Home'
import Contact from './routes/contact/Contact';
import Private from './routes/private/Private';
import ProtectedRoute from './routes/ProtectedRoute';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />,
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/private" element={<ProtectedRoute element={Private} /> } />
    </Route>
  )
) 

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes}>
        <Home/> 
      </RouterProvider>
    </AuthProvider>
  )
}

export default App
