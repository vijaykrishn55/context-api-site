// App.js or main component
import React from 'react';
import UserContextProvider from './context/userContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <h1>Hello there</h1>
      <Login />
      <Profile />
      {/* Other components using the context */}
    </UserContextProvider>
  );
}

export default App;
