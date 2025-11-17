import { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/posts";

// The main component, the "brain" of the app.
function App() {
  // State for all the posts and for the specific post being edited.
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  // Grabs all the posts from our server.
  const fetchPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data);
  };

  // useEffect with an empty array [] runs once when the app starts.
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handles both creating a new post and updating an existing one.
  // This function gets passed down to the PostForm.
  const handleSubmit = async (post) => {
    if (editPost) {
      await axios.put(`${API_URL}/${editPost._id}`, post);
      setEditPost(null);
    } else {
      await axios.post(API_URL, post);
    }
    // Re-fetch posts to show the new/updated post.
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchPosts();
  };

  // Sets the post we want to edit, which gets passed to the form.
  const handleEdit = (post) => setEditPost(post);

  // Clears the form when we cancel an edit.
  const handleCancelEdit = () => setEditPost(null);

  return (
    <div className="app-container">
      <h1>Blog Posts</h1>
      {/* The form component. We pass down what to do on submit/cancel and the post data to edit. */}
      <PostForm
        onSubmit={handleSubmit}
        initialData={editPost}
        onCancel={handleCancelEdit}
      />
      {/* The list component. We pass down the posts and what to do on edit/delete. */}
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
