import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTitle(docSnap.data().title);
        setContent(docSnap.data().content);
      }
    };
    getPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const blogRef = doc(db, "blogs", id);
    await updateDoc(blogRef, { title, content });
    navigate("/");
  };

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditPost;
