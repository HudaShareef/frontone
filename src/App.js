import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';
import { Home } from "./Pages/MainPage";
import { CoursSchedule } from "./Pages/MainPage";
import { Info } from "./Pages/MainPage";
import { SupportTeam } from "./Pages/MainPage";
import  {Registration}  from "./Pages/MainPage";




function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/CoursSchedule' element={<CoursSchedule />} />
          <Route path='/Info' element={<Info />} />
          <Route path='/SupportTeam' element={<SupportTeam />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
