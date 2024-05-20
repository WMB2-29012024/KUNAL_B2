
import InputComponents from "./components/inputComponent";
import TextComponents from "./components/TextComponents";
import { useState } from "react";

function App() {
  const [inputText ,setInputText] = useState("Hello World")
  return (
    <div className="App">
       <InputComponents setInputText = {setInputText}/>
       <TextComponents inputText = {inputText}/>
    </div>
  );
}

export default App;
