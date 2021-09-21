import  {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

function Timer() { 
    const progress = 25;

    return(
        <div>
            
            <CircularProgressbar value={77} text={`${77}%`}  styles={buildStyles({rotation: 1, strokeLinecap: 'round', textColor: '#fff', pathColor: '#4aec8c', tailColor:'rgba(255,255,255,.2)',backgroundColor:'#3e98c7', textAlign: 'center'})}/>
        </div>
    )
 };

 export default Timer;