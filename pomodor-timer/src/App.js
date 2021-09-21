
import './App.css';
import Timer from "./Timer";
import {useState} from 'react';
import Settings from './Settings';
import SettingsContext from './SettingsContext';



function App() {

  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
   <main>
      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        { showSettings? <Settings /> : <Timer />}
    
      </SettingsContext.Provider>
  
   </main>
  );
}

export default App;
