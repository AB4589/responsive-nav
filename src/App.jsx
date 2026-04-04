import { Outlet } from 'react-router';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import ResultChart from './components/ResultChart/ResultChart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
// import { RechartsDevtools } from '@recharts/devtools';
// import { Line, LineChart } from 'recharts';

function App() {



  return (
    <>
      {/* <NavBar navigationData={navigationData}></NavBar>
      <DaisyNav></DaisyNav> */}
      <Header></Header>
      <div className='flex justify-content'>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
