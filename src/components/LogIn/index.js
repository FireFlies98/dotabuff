import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LogIn.scss";

export default function LogIn() {
   const [logInName, setLogInName] = useState("");
   const [logInPassword, setloginPassword] = useState("");
   const navigate = useNavigate();
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: "onBlur" });

   const onChangeLogInName = (e) => {
      setLogInName(e.target.value);
   };

   const onChangeLogInPassword = (e) => {
      setloginPassword(e.target.value);
   };

   const userLogIn = () => {
      if (
         logInName === localStorage.name &&
         logInPassword === localStorage.password
      ) {
         navigate("/");
      }
   };

   const onSubmit = (data) => {
      alert(JSON.stringify(data));
      reset();
   };

   return (
      <>
         <main className="log_in_main">
            <div className="log_in_block">
               <h1 className="log_in_title">Test logIn in DOTABUFF</h1>
               <form
                  className="input_log_in_block"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <input
                     {...register("logInName", {
                        required: "fields are required to be completed!",
                        minLength: {
                           value: 4,
                           message: "minimum 4 characters!",
                        },
                        maxLength: {
                           value: 20,
                           message: "maximum 20 characters!",
                        },
                        pattern: {
                           value: /[A-Za-z0-9]{3}/,
                           message: "invalid name!",
                        },
                     })}
                     type="text"
                     className="log_in_name"
                     onChange={onChangeLogInName}
                     placeholder="login name"
                  />
                  <div className="logIn_error">
                     {errors?.logInName && (
                        <p>{errors?.logInName.message || "Error!"}</p>
                     )}
                  </div>
                  <input
                     {...register("logInPassword", {
                        required: "fields are required to be completed!",
                        minLength: {
                           value: 4,
                           message: "minimum 4 characters!",
                        },
                        maxLength: {
                           value: 20,
                           message: "maximum 20 characters!",
                        },
                        pattern: {
                           value: /[A-Za-z0-9]{3}/,
                           message: "invalid password!",
                        },
                     })}
                     type="text"
                     className="log_in_password"
                     onChange={onChangeLogInPassword}
                     placeholder="login password"
                  />
                  <div className="logIn_error">
                     {errors?.logInPassword && (
                        <p>{errors?.logInPassword.message || "Error!"}</p>
                     )}
                  </div>
                  <input
                     type="submit"
                     className="log_in_button"
                     disabled={!isValid}
                     value="SUBMIT"
                     onClick={userLogIn}
                  />
               </form>
            </div>
         </main>
      </>
   );
}
