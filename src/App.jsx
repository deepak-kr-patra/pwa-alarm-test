import './App.css'
import song from './assets/songs/song.mp3'


function App() {

  window.onload = () => {
    const input = document.getElementById('input');

    // const sound = document.getElementsByTagName('audio')[0];

    input.addEventListener("input", (event) => {
      input.value = event.target.value;
      console.log(input.value);
    });
  }

  let checker;

  let userTime = "";
  const handleClick = () => {
    userTime = input.value;
    console.log(userTime);
    input.value = "";

    clearInterval(checker);
    checker = setInterval(setAlarm, 100);
    
    // sending user input time to service worker
    // navigator.serviceWorker.controller.postMessage(userTime);
  }
  

  const setAlarm = () => {
    let date = new Date();

    // Extract hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Format hours and minutes
    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    if (formattedTime == userTime) {
      const music = new Audio(song);
      music.play();
      clearInterval(checker);
    }
  }

  return (
    <>
      <input type="text" id='input' />
      <button onClick={handleClick}>submit</button>

      <audio src={song} controls></audio>
    </>
  )
}

export default App
