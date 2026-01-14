import { useState } from "react";

const App = () => {
  const [curser, setcurser] = useState({x:600, y:600})

function MouseMove(item){
  console.log(item);
  setcurser({
    x:item.clientX,
    y:item.clientY
  })
  
}

  return (
  <div
    className="w-full h-[100vh] transition-colors duration-200 bg-[rgb(var(--bg))] text-amber-50 font-bold text-3xl flex items-center justify-center"
    style={{ "--bg": `${curser.x % 225}, ${curser.x % 225}, ${curser.x % 225}` }}
  >
    <div
      onMouseMove={MouseMove}
      className="w-100 h-100 flex items-center justify-center text-amber-900 bg-amber-50 border-2 rounded-2xl border-amber-900"
    >
      X : {curser.x} <br />
      Y : {curser.y}
    </div>
  </div>
);

}

export default App