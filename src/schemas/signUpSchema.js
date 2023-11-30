import * as Yup from "yup"


export const signUpSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("email is required"),
  password: Yup.string()
    .min(8, "password must be at least 8 characters")
    .matches(/(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Password must have(lower,upper,nums,symbols)")
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Password must matches"
    ),
  framework: Yup.string()
    .oneOf([
      "React","Vue", "Angular"
    ], "must select a framework")
    .required("framework is requared"),
  terms: Yup.bool()
    .oneOf([true], "you must Accept the terms")
    .required("Terms Accept is required")
});
