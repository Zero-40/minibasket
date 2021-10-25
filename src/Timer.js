
import Timer1 from './Timer1';
import './Timer.css';
function Timer() {
  return (
    <div className="App1">
     <h2 >Deals ends in</h2><Timer1
     countdownTimestampMs={1635444000000}/>
    </div>
  );
}
export default Timer;