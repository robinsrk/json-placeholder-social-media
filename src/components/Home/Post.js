import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";

const Post = ({ post, key }) => {
  console.log(post);
  const DeletePost = (id) => {
    console.log(id);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Post deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <MDBCol size="6" className="d-flex p-2">
      <MDBCard>
        <MDBCardBody className="d-flex flex-column justify-content-around">
          <MDBCardTitle className="col-example">{post.title}</MDBCardTitle>
          <MDBCardText className="col-example">{post.body}</MDBCardText>
          <button className="delete-button" onClick={() => DeletePost(post.id)}>
            <MDBIcon far icon="trash-alt" />
            <span> Delete</span>
          </button>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Post;
