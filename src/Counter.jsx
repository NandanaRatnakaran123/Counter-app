import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'



function Counter() {
  const[counter,setCounter]=useState(0)
  const [running,setRunning]=useState(true)
  
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCounter((num) => num + 1);
    }, 1000);

    // Cleanup function to clear interval when component unmounts or running changes
    return () => clearInterval(interval);
  }, [running]);

  function stop() {
    setRunning(false);
  }

  function restart() {
    setRunning(true);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className='body'>
      <div id='counter' className="container border " style={{marginTop:"200px",alignItems:'center'}}>
        <div className="text-center">
            <h1 className='fw-bolder'>{counter}</h1>
        </div>
        <div className="text-center p-3">
          {running?
             <Button variant='success' className='m-2' style={{backgroundColor:' rgb(237, 114, 80)'}} onClick={stop}>Stop</Button>: <Button variant='success' className='m-2' style={{backgroundColor:' rgb(39, 201, 136)'}} onClick={restart}>Continue</Button>
          }
            {/* <Button variant='success' className='m-2' style={{backgroundColor:' rgb(237, 114, 80)'}} onClick={stop}>Stop</Button>
            <Button variant='success' className='m-2' style={{backgroundColor:' rgb(39, 201, 136)'}} onClick={restart}>Continue</Button> */}
            <Button variant='warning' className='m-2' style={{marginLeft:'10px',backgroundColor:' rgba(236, 245, 73, 0.85)'}} onClick={reset}>Reset</Button>
            
        </div>
      </div>
    </div>
  )
}

export default Counter
