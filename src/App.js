import './App.css';
import React from 'react';
import SignUp from './components/sign-up/SignUp';
import ConfirmOtp from './components/confirm-otp/ConfirmOtp';

function App() {
  return (
    <div className="App">
      <SignUp />
      {/* <ConfirmOtp /> */}
    </div>
  );
}

export default App;
