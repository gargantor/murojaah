import React from 'react';
import './App.css';
import data30 from "./juz30.json";
import data29 from "./juz29.json";
import surat from "./tableSurat.json"
import Modul30Utuh from "./modul30utuh";

class App extends React.Component {
  constructor ()
  {
    super();
    this.state={
      surat: surat,
      data30: data30,
      data29: data29,
    }    
    
    
  }
  gabungData2 = () => {
    const theAyats = JSON.parse(JSON.stringify(this.state.data29));
    let theSurat = JSON.parse(JSON.stringify(this.state.surat));
    for(let i=0; i < theAyats.length; i++){
      for(let j=0; j < theSurat.length; j++){
        if(theSurat[j].noSurat === theAyats[i].noSurat){
          Object.assign(theAyats[i], theSurat[j])
        }  
      }
    }
    return theAyats;
    
    
  }
  render() {  
    
    let theAyats =[];
    if((theAyats.length===0)){
      theAyats = this.gabungData2();
      return (
        <div className="App">        
          <div>          
            <Modul30Utuh              
              theAyats={theAyats}
            />                      
          </div>
        </div>
      );
    }
    return(
      <div></div>
    );
    
    
  }
}

export default App;

