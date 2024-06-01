import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Verification from './components/Verification';
import UserProfile from './components/UserProfile';
import CarUploadPage from './components/CarUploadPage';
import PayPage from './components/PayPage';
import DetailedInfo from './components/DetailedInfo';
import ResultPage from './components/ResultPage';
import CurrentPastRentals from './components/CurrentPastRentals';
import { getData } from "./scripts/firebase/getData";

function App() {
  // let a = await getData("cars");

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" exact component={MainPage} /> */}
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/signin"  element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/car-upload" element={<CarUploadPage />} />
          <Route path="/paypage" element={<PayPage />} />
          <Route path="/detailed-info" element={<DetailedInfo />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/current-past-rentals" element={<CurrentPastRentals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
