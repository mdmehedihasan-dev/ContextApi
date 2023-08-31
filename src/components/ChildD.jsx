import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'
import Contents from './Contents'
const ChildD = () => {

    const {userName, setUserName} = useContext(userContext)




  return (
    <div>
       <h1>  {userName} </h1> 
       <button onClick={()=>setUserName( <Contents/> )}  >Update name</button>
    </div>
  )
}

export default ChildD
