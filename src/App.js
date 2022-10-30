import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RoomModal from './components/RoomModal';
import Home from './pages/Home';

function App() {
  const [ roomModalOpen, setRoomModalOpen ] = useState(false);
  
  const closeRoomModal = () => {
    setRoomModalOpen(false);
  }

  const openRoomModal = () => {
    setRoomModalOpen(true);
  }

  useEffect(() => {
    if(roomModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [ roomModalOpen ]);

  return (
    <div className="App">
        {roomModalOpen && 
          <RoomModal closeRoomModal={closeRoomModal} />}
        <Header />
        <Home openRoomModal={openRoomModal}/>
        <Footer />
    </div>
  );
}

export default App;
