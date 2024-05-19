import "./App.css";
import Post from "./components/Post/Post";
import PostForm from "./components/PostForm/PostForm";

function App() {
  return (
    <>
      <h1 className="text-3xl p-2 bg-purple-500 text-white">
        Crud Operation with Appwrite
      </h1>
      <PostForm />
      <div className="flex flex-wrap justify-between gap-5">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default App;
