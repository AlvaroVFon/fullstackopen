import { useState } from "react"
import Button from './Button.jsx'
import './App.css'

 
// function App(){

//   const [countLeft,setCountLeft] = useState(0)
//   const [countRight,setCountRight]= useState(0)
//   const handleClickLeft = {
//     add: ()=>{
//       setCountLeft(countLeft+1)
//     },
//     subs: ()=> {
//       setCountLeft(countLeft-1)
//     },
//     reset: ()=>{
//       setCountLeft(0)
//     }
//   }
//   const handleClickRight = {
//     add: ()=>{
//       setCountRight(countRight+1)
//     },
//     subs: ()=> {
//       setCountRight(countRight-1)
//     },
//     reset: ()=>{
//       setCountRight(0)
//     }
//   }
//   return ( 
//   <>
//   <div className='main-container'>
//     <div className='main-div'>
//       <h1> {countLeft}</h1>
//       <div className='btn-container'>
//         <Button handleClick = {handleClickLeft.subs} text={'-1'}/>
//         <Button handleClick = {handleClickLeft.reset} text={'reset'}/>
//         <Button handleClick = {handleClickLeft.add} text={'+1'}/>
//       </div>  
//     </div>
//     <div className='main-div'>
//       <h1> {countRight}</h1>
//       <div className='btn-container'>
//         <Button handleClick = {handleClickRight.subs} text={'-1'}/>
//         <Button handleClick = {handleClickRight.reset} text={'reset'}/>
//         <Button handleClick = {handleClickRight.add} text={'+1'}/>
//       </div>  
//     </div>
//   </div> 
//  </>
  
//  )
// }

//Podemos optimizar el código anterior unificando los estados

const App=()=>{

  const [clicks, setClicks] = useState({
    left:0,
    right:0
  })
  const handleLeftClick = ()=>{
    const newClicks = {
      left: clicks.left+1,
      right: clicks.right
    }
    setClicks(newClicks)
  }
  const handleRightClick = ()=>{
    const newClicks = {
      left: clicks.left,
      right: clicks.right +1
    }
    setClicks(newClicks)
  }
 
return ( 
  <>
    <div className='main-container'>
      <div className='main-div'>
        <h1> {clicks.left}</h1>
        <div className='btn-container'>
          <Button handleClick = {handleLeftClick} text={'-1'}/>
          <Button handleClick = {handleLeftClick} text={'reset'}/>
          <Button handleClick = {handleLeftClick} text={'+1'}/>
        </div>  
      </div>
      <div className='main-div'>
        <h1> {clicks.right}</h1>
        <div className='btn-container'>
          <Button handleClick = {handleRightClick} text={'-1'}/>
          <Button handleClick = {handleRightClick} text={'reset'}/>
          <Button handleClick = {handleRightClick} text={'+1'}/>
        </div>  
      </div>
    </div> 
  </>
  
 )
}

export default App