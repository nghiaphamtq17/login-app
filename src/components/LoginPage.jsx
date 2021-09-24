import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getInfoUser, handleLogin } from "../store/userSlice";
import { Redirect } from 'react-router';

const LoginPage = () => {
  <Redirect to="/" />
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(handleLogin(data));
  };

  useEffect(() => {
    dispatch(getInfoUser);
  }, []);

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        // value=''
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        // value=''
        {...register("Password", { required: true })}
      />

      <input type="submit" />
      <Link to="/">to home page</Link>
    </form>
  );
};

export default LoginPage;
