import  {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import {useContext, useState} from 'react';
import SettingsContext from './SettingsContext';

function Timer() { 
    const progress = 25;
    const settingsInfo = useContext(SettingsContext);

    return(
        <div>
            <div style={{textAlign: 'center'}}>
                
                <CircularProgressbar value={77} text={`${77}%`}  styles={buildStyles({rotation: 1, strokeLinecap: 'round', textColor: '#fff', pathColor: '#4aec8c', tailColor:'rgba(255,255,255,.2)',backgroundColor:'#3e98c7', textAlign: 'center'})}/>
            </div>
            <div style={{marginTop:'20px'}}>
                <PlayButton/>
                <PauseButton />
            </div> 

            <div style={{marginTop:'20px'}}>
                <SettingsButton onClick={()=> settingsInfo.setShowSettings(true)} />
            </div>
       
        </div>
    )
 };

 export default Timer;