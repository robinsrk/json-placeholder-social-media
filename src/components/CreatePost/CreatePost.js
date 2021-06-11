import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./CreatePost.css";

const CreatePost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          alert("Post added successfully.");
        }
        console.log(success);
      });
  };
  return (
    <div className="container">
      <h1 className="text-center p-5">JsonPlaceholder Socail Media</h1>
      <MDBRow>
        <MDBCol md="12" lg="3">
          <Sidebar />
        </MDBCol>
        <MDBCol md="12" lg="9">
          <form
            className="createPostForm p-5 shadow-sm p-3 mb-5 bg-body rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <input
                type="text"
                {...register("title")}
                name="title"
                placeholder="Title"
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                {...register("body")}
                name="body"
                placeholder="Body"
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="number"
                {...register("userId")}
                name="userId"
                placeholder="User Id"
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group text-right">
              <button type="submit" className="post-button">
                <MDBIcon icon="edit" />
                <span> Create Post</span>
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default CreatePost;
