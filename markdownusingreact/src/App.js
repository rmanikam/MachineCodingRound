
import React, { useState } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
function App() {
  const [markdown, setMarkDown] = useState("");
  return (
    <div className="App">
     <Editor markdown ={markdown} setMarkDown={setMarkDown} />
     <Previewer markdown={markdown}/>
    </div>
  );
}

export default App;
