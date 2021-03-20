import logo from './logo.svg';
import './App.css';
import React from 'react';



const DrumPad = props => {
  const [tasto, setTasto]  = React.useState();
  
  const inputRef = React.useRef(null);
  React.useEffect(()=>{
  inputRef.current.focus();
  }, []);

  
  //gestione della pressione dei tasti
  
  const handleKeyPress = event => {
    switch (event.key){
      case 'Q': document.getElementById('Q').play(); setTasto(props.pad[0].text); break;
      case 'W': document.getElementById('W').play(); setTasto(props.pad[1].text); break;
      case 'E': document.getElementById('E').play(); setTasto(props.pad[2].text);  break;
      case 'A': document.getElementById('A').play(); setTasto(props.pad[3].text);  break;
      case 'S': document.getElementById('S').play(); setTasto(props.pad[4].text);  break;
      case 'D': document.getElementById('D').play(); setTasto(props.pad[5].text);  break;
      case 'Z': document.getElementById('Z').play(); setTasto(props.pad[6].text);  break;
      case 'X': document.getElementById('X').play(); setTasto(props.pad[7].text);  break;
      case 'C': document.getElementById('C').play(); setTasto(props.pad[8].text);  break;
      default: break;
        
    }
  }
  
    const handleClick = event => {
      event.preventDefault();
     switch (event.target.id){
      case 'heater-1': document.getElementById('Q').play(); setTasto(props.pad[0].text);  break;
      case 'dsc-oh': document.getElementById('W').play(); setTasto(props.pad[1].text);  break;
      case 'kicknhat': document.getElementById('E').play(); setTasto(props.pad[2].text);  break;
      case 'cevh2': document.getElementById('A').play(); setTasto(props.pad[3].text);  break;
      case 'chord1': document.getElementById('S').play(); setTasto(props.pad[4].text);  break;
      case 'givelight': document.getElementById('D').play(); setTasto(props.pad[5].text);  break;
      case 'dryoh': document.getElementById('Z').play(); setTasto(props.pad[6].text);  break;
      case 'bld': document.getElementById('X').play(); setTasto(props.pad[7].text);  break;
      case 'sidestick': document.getElementById('C').play(); setTasto(props.pad[8].text);  break;
      default: break;
     } 
    }
    
  
  return (
  
  <div id='drum-pad' >
      {props.pad.map(ele => 
               <button className="drum-pad" id={ele.id} onKeyPress={handleKeyPress} onClick={handleClick} ref={inputRef}> 
                     {ele.letter} 
                     <audio id={ele.letter} controls className='clip' src={ele.src}></audio>
              </button>)}
      <Display display={tasto} />
  </div>
  
  )
}

//-------------------------------------------------

const Display =  props => {
  return(
  <div id="display">
    {props.display}
   </div>
  )
}

//----------------------------------------
function App() {
  
  //definisco i suoni 
    const padKeys = 
        [
          {letter: 'Q',
           src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
           text: 'Heater 1',
           id: 'heater-1'
          },
          {
            letter: 'W',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
            text: 'Dsc_oh',
            id: 'dsc-oh'
          },
          {
            letter: 'E',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
            text: 'Kick and hat',
            id: 'kicknhat'
          },
          {
            letter: 'A',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
            text: 'Cev_H2',
            id: 'cevh2'
          },
          {
            letter: 'S',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
            text: 'Chord 1',
            id: 'chord1'
          },
          {
          letter: 'D',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
          text: 'Give us light',
          id: 'givelight'
          },
          {
            letter: 'Z',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
            text: 'Dry Oh',
            id: 'dryoh'
          },
          {
            letter: 'X',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
            text: 'Bld',
            id: 'bld'
          },
          {
            letter: 'C',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
            text: 'Side stick',
            id: 'sidestick'
          }
        ];
  
  
    return (
    <div id='drum-machine'>
  <DrumPad pad={padKeys}/>
  </div>
  )
 
}

export default App;
