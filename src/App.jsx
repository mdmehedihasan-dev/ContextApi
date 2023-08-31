import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'



export const userContext = createContext(null)

function App() {
  const [userName, setUserName] = useState('Md Mehedi Hasan')

  return (
      <userContext.Provider  value={{userName, setUserName}} > 
   <div>

      <ChildA/>

   </div>
   </userContext.Provider>
  )
}

export default App
