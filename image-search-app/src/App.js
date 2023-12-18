import './App.css';
import searchImage from './axio';
import { useState } from 'react';
import 'bulma/css/bulma.css';


function App() {

  const [image, setImage] = useState('');

  async function handleClick() {

    const result = await searchImage();
    let [obj] = result.data
    setImage(obj)

  }

 

  return (
<div className="App" 
         style={
          {display:'flex',
           flexDirection:'column',
           width:'100%',
           justifyContent:'center',
           alignItems:'center',
           marginTop:'25px',
           }}>
 <img
              style={{ 
                display: 'block', 
                height: '300px', 
                width: '300px',
                borderTopRightRadius:'5px',
                borderTopLeftRadius:'5px',
                boxShadow:'0 2px 5px rgba(0,0,0,0.5)'  }}
              alt={image.id}
              src={image.url}></img>

<button 
class="button is-link"
onClick={handleClick}
              style={{
                width:'300px',
                borderTopRightRadius:'0px',
                borderTopLeftRadius:'0px',
                boxShadow:'0 2px 5px rgba(0,0,0,0.5)'
              }}>Click to see a Cat</button>
             

           </div>
    
  );
}

export default App;
