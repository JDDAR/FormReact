import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";

import { signUpSchema } from "../schemas/signUpSchema";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirmpassword: "",
  framework: "",
  terms: false,
  
}

const SignUp = () => {

  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  }



  return (
    <>
    <main className="container">
      <section className="card-form">
        <h3>WELCOME, JOIN US!</h3>
      
        <Formik 
            
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={signUpSchema}
            
            >
          <Form autoComplete="off" >
            <fieldset>
                <label htmlFor="fullname">Full Name</label>
                <Field name="fullname" id="fullname" type="text" autoFocus />
                <ErrorMessage 
                  name="fullname"
                  component="p"
                  className="error-message"
                  />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" type="email" />
              <ErrorMessage 
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="password">Password</label>
              <Field name="password" id="password" type="password"/> 
              <ErrorMessage 
                name="password"
                component="p"
                className="error-message"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <Field name="confirmpassword" id="confirmpassword" type="password" />
              <ErrorMessage 
                name="confirmpassword"
                component="p"
                className="error-message"
              />
            </fieldset>
          
            <fieldset>
              <label htmlFor="framework">Select your framework</label>
              <Field name="framework" id="framework" as="select">
                <option value=""></option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="Angular">Angular</option>
              </Field>
              <ErrorMessage 
                name="framework"
                component="p"
                className="error-message"
                />
            </fieldset>

            <fieldset>
              <label htmlFor="terms" id="check-terms">
                <Field name="terms" id="terms" type="checkbox"/> Accept terms and conditions 
              </label>
              <ErrorMessage 
                name="terms"
                component="p"
                className="error-message error-message-terms"
                />
            </fieldset>

            <button type="submit" className="btn-primary">REGISTER</button>
          </Form>
        </Formik>
        <p>Already have an account? <span onClick={() => setStep("signin")}>Sign In</span></p>
      </section>
    </main>
    </>
  )
};

export default SignUp;
