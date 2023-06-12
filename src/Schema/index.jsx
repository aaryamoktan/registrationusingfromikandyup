import * as Yup from "yup";
 export const Sign = Yup.object(
    {
        name:Yup.string().min(3).max(45).required("plz enter your full name"),
        email:Yup.string().email().required("plz enter Email"),
        password:Yup.string().min(6).required("plz enter Password"),
        c_password:Yup.string().required().oneOf([Yup.ref("password"),null],"password must be match")
    }
 )