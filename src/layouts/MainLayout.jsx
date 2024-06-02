import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1 bg-white dark:bg-darker">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout