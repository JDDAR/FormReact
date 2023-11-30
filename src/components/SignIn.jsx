import { useContext, useState } from "react";


import AuthContext from "../context/AuthContext";


const SignIn = () => {

  let {setStep} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  // Focus de los inputs del formulario 

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused]  = useState(false);

  const handlerSubmit = (e) => {
    //evitar el envio de datos a un backend
    e.preventDefault();
    console.log("sending data to backend");
    console.log(`el usuario digito: ${email} y ${password}`);
    
  };

  return (
    <>
    <main className="container">
      <section className="card-form">
        <h3>SIGN IN</h3>
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input  
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                id="email" 
                autoFocus
                required
                onBlur={ () => setEmailFocused(true)}
                data-focused = {emailFocused}
              />
            <p className="error">Valid email required</p>
          </fieldset>
    
          <fieldset> 
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password"
                pattern="(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                onBlur={() => setPasswordFocused(true)}
                data-focused={passwordFocused}
                />
         
             <p className="error">Valid email required</p>
          </fieldset>          
         
         <div className="forgot"  onClick={() => setStep("forgot")}>Forgot password ? </div>
          <button type="submit" className="btn-primary" >LOGIN</button>
        </form>
        <p>don&apos;t have an account ? <span onClick={() => setStep("signup")}>Sign up</span></p>   
    </section>
    </main>
    </>
  )
};

export default SignIn;
