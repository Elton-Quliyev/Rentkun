import './App.css';
import { BrowserRouter as Router, Routes , Route, Navigate } from 'react-router-dom';
import Header from './Shared/Header/MainHeader/header';
import Discover from './Pages/AboutCar/Discover/discover';
import Dashboard from './Pages/AboutCar/Dashboard/dashboard';
import Calendar from './Pages/AboutCar/Calendar/calendar';
import Saved from './Pages/AboutCar/Saved/saved';
import Inbox from './Pages/AboutCar/Inbox/inbox';
import Transactions from './Pages/Report/Transactions/transactions';
import CarReports from './Pages/Report/CarReports/carReports';
import Settings from './Pages/Report/Settings/settings';
import LogOut from './Pages/Report/LogOut/logOut';
import ProfileSettings from './Pages/Report/Settings/SettingBars/ProfileSettings/profileSettings';
import PasswordChange from './Pages/Report/Settings/SettingBars/PasswordChange/passwordChange';
import ChangeEmail from './Pages/Report/Settings/SettingBars/ChangeEmail/changeEmail';
import Notifications from './Pages/Report/Settings/SettingBars/Notifications/notifications';
import PaymentMethod from './Pages/Report/Settings/SettingBars/PaymentMethod/paymentMethod';
import Security from './Pages/Report/Settings/SettingBars/Security/security';
import Help from './Pages/Report/Settings/SettingBars/Help/help';
import FormOne from './Components/Registration/Login/Form_1/form_1';
import FormTwo from './Components/Registration/Register/Form1/form1';
import ScrollToTop from './Helpers/ScrollToTop/scrollToTop';
import Vehicle from './Components/Vehicle/vehicle';

function App() {
  return (
    <Router>
      <Header/>

      <ScrollToTop/>

      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='discover' element={<Discover/>}/>
          <Route path='calendar' element={<Calendar/>}/>
          <Route path='saved' element={<Saved/>}/>
          <Route path='inbox' element={<Inbox/>}/>
          <Route path='transactions' element={<Transactions/>}/>
          <Route path='carReports' element={<CarReports/>}/>
          <Route path='settings' element={<Settings/>}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path='profile'  element={<ProfileSettings />} />
            <Route path='passwordChange' element={<PasswordChange />} />
            <Route path='emailChange' element={<ChangeEmail />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='payment' element={<PaymentMethod />} />
            <Route path='security' element={<Security />} />
            <Route path='help' element={<Help />} />
          </Route>

          <Route path='logOut'  element={<LogOut/>}/>

          <Route path='login' element={<FormOne/>}/>
          <Route path='registration' element={<FormTwo/>}/>
          <Route path='vehicle' element={<Vehicle/>}/>

        
      </Routes>
    </Router>
  );
}

export default App;
