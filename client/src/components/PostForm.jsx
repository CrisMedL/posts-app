import { useState, useEffect } from "react";

export default function PostForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [content, setContent] = useState(initialData?.content || "");

  // When the form is submitted...
  const handleSubmit = (e) => {
    e.preventDefault();
    // ...call the onSubmit function from App.jsx and pass the form data up.
    onSubmit({ title, author, content });
    // Then clear the form fields.
    setTitle("");
    setAuthor("");
    setContent("");
  };

  useEffect(() => {
    // If we get a post to edit, fill the form with its data.
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setContent(initialData.content);
    } else {
      // Otherwise, we clear the form fields.
      setTitle("");
      setAuthor("");
      setContent("");
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="form-group">
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Body:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="form-actions">
        {/* Button text changes if we're editing or creating. */}
        <button type="submit" className="submit-button">
          {initialData ? "Update Post" : "Save Post"}
        </button>
        {/* The "Cancel" button only shows up when editing. */}
        {initialData && (
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
