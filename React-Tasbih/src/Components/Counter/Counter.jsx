import { useState } from "react"
import '../Counter/Counter.css'

export default function Counter() {
  const [counter, setCounter]  = useState({i:0, d:0, r: 0})
    const subhanallah = () => {
        setCounter((prevValue) => {
            const newState = {
                ...prevValue, 
               i:  prevValue.i <33?prevValue.i+1 : prevValue.i 
            }
            return newState
        })
    }
    const alhamdulillah = () => {
     setCounter((prevValue) => {
            const newState = {
                ...prevValue, 
              d: prevValue.d < 33? prevValue.d+1 : prevValue.d
            }
            return newState
        })
    }
    const allahuAkbar = () => {
      setCounter((prevValue) => {
             const newState = {
                 ...prevValue, 
               r: prevValue.r < 34? prevValue.r+1 : prevValue.r
             }
             return newState
         })
     }

    const reset = () => {
      setCounter({i: 0,d:0,r: 0}
        
        )
     }
  return (
   <>
   <div className="tasabih-buttons">
    <div className="heading">
    <h1>﷽ <br></br> 
    in the name of Allah, Most Gracious, Most Merciful</h1> 
     <h2>لا إله الا الله وحده لا شرك له له الملك و له الحمد و هـو على گل شيء قدير <br></br>
    there is no god worthy of worship except Allah alone, <br></br>with no partner or associate. His is the Dominion and <br></br>to Him be praise, and He is able to do all things</h2> 
    </div>

<div className="inputs">
    <input value={counter.r} type="text" name="" id="" />
    <input value={counter.d} type="text" name="" id="" />
<input value={counter.i}type="text" name="" id="" />
</div>

<div className="buttons">
<button onClick={allahuAkbar}>الله أكبر </button>
    <button onClick={alhamdulillah}>ٱلْحَمْدُ لِلَّٰهِ</button>
<button onClick={subhanallah}> سبحان الله </button>
</div>

<div className="reset-button">
<button onClick={reset}>Reset</button>
</div>
</div>
   </>
  )
}
