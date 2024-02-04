import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Singup } from "./differentPages/Signup";
import { Singin } from "./differentPages/Signin";
import { Dashboard } from "./differentPages/Dashboard";
import { SendMoney } from "./differentPages/SendMoney";

import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Singup toast={toast} />} />
          <Route path="/signin" element={<Singin toast={toast} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney toast={toast} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
