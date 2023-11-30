import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape( { 
  email: Yup.string()
  .email("Plase, type a valid email")
  .required("The email is required"),
 });
