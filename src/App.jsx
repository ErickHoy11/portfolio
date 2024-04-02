import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Resume from './pages/Resume/Resume'
import Transcript from './pages/Transcript/Transcript'
import Projects from './pages/Projects/Projects'
import Footer from './components/Footer/Footer'

import { useState, createContext } from 'react';
import './App.css'

export const handleMainPageChangeContext = createContext();

function App() {

  const [mainPage, setMainPage] = useState(<Home/>)

  const handleMainPageChange = (mainPageTitle) =>{
    switch(mainPageTitle){
      case "home":
        setMainPage(<Home/>);
        break;
      case "resume":
        setMainPage(<Resume/>);
        break;
      case "transcript":
        setMainPage(<Transcript/>);
        break;
      case "projects":
      setMainPage(<Projects/>);
      break;
    }
  }


  return (
    <>
    <handleMainPageChangeContext.Provider value={handleMainPageChange}>
      <Navbar onClick={handleMainPageChange}></Navbar>
      {mainPage}
      <Footer></Footer>
    </handleMainPageChangeContext.Provider>
    </>
  )
}

export default App
