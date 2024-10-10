import Data from"./Data";
import { accordionData } from "./utils/content";
function App() {


  
  return (
    <div className="App">
      {accordionData.map(({title, content}) =>
      {
          return (
            <Data title={title} content = {content} />
          )
      })}

     
    </div>
  );
}

export default App;
