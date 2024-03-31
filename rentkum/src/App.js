import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './Shared/Header/header';
import Discover from './Pages/AboutCar/Discover/discover';
import Dashboard from './Pages/AboutCar/Dashboard/dashboard';
import Calendar from './Pages/AboutCar/Calendar/calendar';
import Saved from './Pages/AboutCar/Saved/saved';
import Inbox from './Pages/AboutCar/Inbox/inbox';
import Transactions from './Pages/Report/Transactions/transactions';
import CarReports from './Pages/Report/CarReports/carReports';
import Settings from './Pages/Report/Settings/settings';
import LogOut from './Pages/Report/LogOut/logOut';

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/saved' element={<Saved/>}/>
        <Route path='/inbox' element={<Inbox/>}/>

        <Route path='/transactions' element={<Transactions/>}/>
        <Route path='/carReports' element={<CarReports/>}/>

        <Route path='/settings' element={<Settings/>}/>
        <Route path='/logOut'  element={<LogOut/>}/>

      </Routes>
    </Router>
    
  );
}

export default App;
