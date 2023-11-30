import { useState } from "react"

//importando el  contexto 
import AuthContext from "./context/AuthContext"


import ForgotPassword from "./components/ForgotPassword"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"


function App() {
  const [step, setStep] = useState("signin");
  
  return (
    <>
    <AuthContext.Provider value={{step, setStep}}>
      <div className="container">
        { step === "signin" && <SignIn /> }
        { step === "signup" && <SignUp /> }
        { step === "forgot" && <ForgotPassword /> }
      </div>
    </AuthContext.Provider>
    </>
  )
}

export default App
