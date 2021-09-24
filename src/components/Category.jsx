import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getData } from "../store/categorySlice";
import { useForm } from "react-hook-form";

const Category = () => {
  const dispatch = useDispatch();

  const dataCate = useSelector((state) => state.category.data);

  console.log(dataCate);

  const listCate = () => {
    return(
      dataCate.map((item , index )=> {
        return (
          <div key={index}>{item.name} </div>
        )
      })
    )
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addCategory(data));
  };
  console.log(errors);

  useEffect(() => {
      dispatch(getData);
    }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>hello welcome to category page</div>
      {listCate()}
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true, max: 200, min: 1 })}
      />
      <input type="submit" />
    </form>
  );
};

export default Category;
