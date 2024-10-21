
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './User'

function App() {
 function handleClick(){
  alert('Button Clicked')
 } 
const handleClick2 = () =>{
  alert('Button 2 Clicked')
}
const addNum = (num) => {
  alert(num+5)
}
  return (
    <>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <h1>React Core Concepts</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert("Button 3 Clicked")}}>Click Me 3</button>
      <button onClick={() => addNum(15)}>Add Number</button>
 
    
    </>
  )
}

export default App
