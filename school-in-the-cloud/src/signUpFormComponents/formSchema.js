import * as yup from "yup";

export default yup.object().shape({
    username: yup.string().required("You must input a username").min(3, "Name must be at least 3 characters"),
    password: yup.string().required("You must choose a password").min(8, "Password must be at least 8 characters long"),
    email: yup.string().email("Must be valid email").required("You must input an email"),
    role: yup.string().oneOf([ "admin", "volunteer", "student"]),
})