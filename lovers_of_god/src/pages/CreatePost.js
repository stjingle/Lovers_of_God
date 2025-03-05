import React, { useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      const imageRef = ref(storage, `images/${uuidv4()}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, "posts"), { title, content, imageUrl });
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Create a New Post</h2>
      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea className="form-control" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-success w-100">Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
