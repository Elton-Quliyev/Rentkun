import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import ScrollToTop from './Helpers/ScrollToTop/scrollToTop';
import Vehicle from './Components/Vehicle/vehicle';
import LoginForm from './Components/Registration/Login/login';
import SignUpForm from './Components/Registration/SignUp/signUp';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  const shouldRenderHeader = !["/login", "/registration", "/vehicle"].includes(location.pathname);

  return (
    <div className='app-container'>
      {shouldRenderHeader && <Header />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="discover" element={<Discover />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="saved" element={<Saved />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="carReports" element={<CarReports />} />
        <Route path="settings" element={<Settings />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="passwordChange" element={<PasswordChange />} />
          <Route path="emailChange" element={<ChangeEmail />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="payment" element={<PaymentMethod />} />
          <Route path="security" element={<Security />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="logOut" element={<LogOut />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<SignUpForm />} />
        <Route path="vehicle" element={<Vehicle />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}


export default App;
