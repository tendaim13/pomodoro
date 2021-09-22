import  {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import {useContext, useState, useEffect, useRef} from 'react';
import SettingsContext from './SettingsContext';
import 'react-circular-progressbar/dist/styles.css';

function Timer() { 

    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [mode,setMode] = useState('work');

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    const needDominantBaselineFix = 0;


    function tick(){
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    function switchMode(){
        const nextmode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextmode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60);
        setMode(nextmode);
        modeRef.current = nextmode;
        
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }

    function initTimer(){
        setSecondsLeft(settingsInfo.workMinutes * 60);
    }

    useEffect(() =>{
        initTimer();

        const interval = setInterval(()=>{
            if (isPausedRef.current){
                return;
            }
            if(secondsLeftRef.current === 0){
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);


    const totalSeconds = mode === 'work'? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    let progress = Math.round(secondsLeft / totalSeconds * 100);
    const minutes = Math.floor( secondsLeft / 60);
    let seconds = secondsLeft % 60;

    if (seconds < 10) seconds = '0'+seconds;

    return(
        <div>
            <div>
                
                <CircularProgressbar 
                value={progress}
                text={minutes + ':' + seconds} 
                styles={buildStyles({
                    textColor: '#fff', 
                    pathColor: mode === 'work' ? 'red' : 'green', 
                    tailColor:'rgba(255,255,255,.2)',
                    })}/>
            </div>
            <div style={{marginTop:'20px'}}>
                {isPaused ? <PlayButton onClick={()=> {setPaused(false); isPausedRef.current =false}} /> 
                : <PauseButton onClick={()=> { setPaused(true); isPausedRef.current = true}} />}
                
            </div> 

            <div style={{marginTop:'20px'}}>
                <SettingsButton onClick={()=> settingsInfo.setShowSettings(true)} />
            </div>
       
        </div>
    )
 };

 export default Timer;