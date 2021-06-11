import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Sidebar from "../Sidebar/Sidebar";
import Post from "./Post";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center p-5">JsonPlaceholder Socail Media</h1>
      <MDBRow>
        <MDBCol md="12" lg="3">
          <Sidebar />
        </MDBCol>
        <MDBCol md="12" lg="9">
          <MDBRow>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Home;
