import React, { useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import "../styles/CreateEvent.css"; // Importing the CSS file

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `events/${uuidv4()}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "events"), { title, content, imageUrl });
      setTitle("");
      setContent("");
      setImage(null);
      setMessage("Event created successfully!");
    } catch (error) {
      setMessage("Error creating event. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="create-event-container">
      <h2 className="text-center">Create a New Event</h2>
      {message && <p className="message">{message}</p>}
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>
          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
