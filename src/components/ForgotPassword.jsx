import { useFormik } from "formik";
import {useContext} from "react";

import AuthContext from "../context/AuthContext";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";



const ForgotPassword = () => {

  let { setStep } = useContext(AuthContext);
  
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik ({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  function onSubmit() {
    console.log(values)
  }

  return (
    <>
    <main className="container">
      <section className="card-form">
        <h3>FORGOT PASSWORD</h3>

        <form onSubmit={handleSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              autoFocus 
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
          </fieldset>
          <button type="submit">Remember me!</button>
        </form>
        <p>Already have an account <span onClick={() => setStep("signin")} >Sign In</span></p>
      </section> 
    </main>
    </>
  )
};

export default ForgotPassword;
