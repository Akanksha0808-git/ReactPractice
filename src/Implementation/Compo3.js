import React,{useState} from 'react'
import Compo1 from './Compo1';
import Compo2 from './Compo2';
const Compo3 = () => {

    const [text, setText] = useState(0);

//   const toggleText = () => {
//     setText(text === 'Welcome to prepbytes' ? 'welcome to ea23' : 'Welcome to prepbytes');
//   };

  return (
    <div>
      {/* <button onClick={toggleText}>Click to Change</button>
      <h1>{text}</h1> */}
      <button onClick={()=> setText(!text)}>Click To Change</button>
      {text?<Compo1/>:<Compo2/>}
    </div>
  );

}

export default Compo3
