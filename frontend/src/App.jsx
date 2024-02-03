import {BrowserRouter,Route,Routes} from "react-router-dom";

import { Singup } from "./differentPages/Signup";
import { Singin } from "./differentPages/Signin";
import { Dashboard } from "./differentPages/Dashboard";
import { SendMoney } from "./differentPages/SendMoney";


function App() {

  return (
    <>
    
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Singup/>}/>
          <Route path="/signin" element={<Singin/>}/>
          <Route path="/dashboard" element ={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
