export default function PostList({ posts, onEdit, onDelete }) {
  return (
    <div className="post-list">
      {/* Loop over the posts array and create a div for each one. */}
      {posts
        .slice()
        .reverse()
        .map((post) => (
          // The 'key' is important for React to keep track of each item in the list.
          <div key={post._id} className="post-item">
            <h3>{post.title}</h3>
            <p>
              <b>Author:</b> {post.author}
            </p>
            <p>{post.content}</p>
            <p>
              <i>{new Date(post.createdAt).toLocaleString()}</i>
            </p>
            {/* When clicked, call the onEdit function from App.jsx, passing this post up. */}
            <button onClick={() => onEdit(post)} className="edit-button">
              Edit
            </button>
            {/* When clicked, ask for confirmation, then call onDelete from App.jsx with the post's ID. */}
            <button
              className="delete-button"
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this post?")
                )
                  onDelete(post._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
