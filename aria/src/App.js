import Button from "./Button";
function App() {
  const disabled = false;
  const onclick= () => {
    alert("Button Clicked")
 }
  return (
    <>
      <div>
        ARIA ATTRIBUTE EXAMPLE ||
        button that using some aria attribute
      </div>
      <div>
        <Button onClick={onclick} disabled={disabled} />
      </div>
    </>

  );
}

export default App;
