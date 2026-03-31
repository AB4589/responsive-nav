import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {
  const navigationData =  [
  {
    "id": 1,
    "name": "Dashboard",
    "url": "/dashboard",
    "icon": "layout-dashboard"
  },
  {
    "id": 2,
    "name": "Users",
    "url": "/users",
    "icon": "users"
  },
  {
    "id": 3,
    "name": "Transactions",
    "url": "/transactions",
    "icon": "arrow-left-right"
  },
  {
    "id": 4,
    "name": "Settings",
    "url": "/settings",
    "icon": "settings"
  },
  {
    "id": 5,
    "name": "Reports",
    "url": "/reports",
    "icon": "bar-chart-3"
  }
];
  return (
    <>
      <NavBar navigationData={navigationData}></NavBar>
      <DaisyNav></DaisyNav>
    </>
  )
}

export default App
