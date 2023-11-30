import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";


const InputPassword = () => {

  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);

  const [password, setPassword ] = useState("")

//  const eyeOn = () => {
//    console.log("passwordOn");
//  }
//  const eyeOff = () => {
//    console.log("passwordOff");
//
//  }
  
  const VisibilityPass = (passOn) => {
    setShow(passOn);
    setType(passOn ? "text" : "password");
  }

  return (
    <>
    <fieldset> 
      <label htmlFor="password">Password </label>
      <input type={type} id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        
        { !show && ( <HiEye className="icon-password" onClick={() => VisibilityPass(true)} /> ) }    
        { show && ( <HiEyeOff className="icon-password" onClick={() => VisibilityPass(false)}/>)}
      
      <p className="error">Valid email required</p>
    </fieldset>
    </>
  ) 

}

export default InputPassword
