import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';


// step1 : create context
const UserContext = createContext();

//step2: wrap all the child insid∈ the a provider

// step3. pass value

// step 4 : go inside the consumer and consume the value;  // we are using here usecontext


function App() {

  const [user] = useState({name:"Ranjay Prajapati ,student of LPU"})

  return (
    <>
    <UserContext.Provider value={user}>
   <ChildA />
    </UserContext.Provider>
      
    </>
  )
} 

export default App
// eslint-disable-next-line react-refresh/only-export-components
export { UserContext }
