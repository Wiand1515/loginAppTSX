import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, getPosts } from "../api";
import { NewPostCard } from "../components/card/NewPostCard";
import { PostCard } from "../components/card/PostCard";
import { TextInputComponent } from "../components/common/InputComponent/TextInputComponent";
import { AuthContext } from "../context/AuthContext";

export const UserPostsView = () => {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState<any[]>([]);
  const user = JSON.parse(localStorage.getItem("user") || '{}');

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const id = user.id;

  useEffect(() => {
    getPosts(id).then((response) => {
      setPosts(response);
    });
  }, [id]);

  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id);
      getPosts(user.id).then((response) => setPosts(response));
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const handleSearchbar = (event: any) => {
    setSearch(event.target.value)
  }

  const filtered = !search
    ? posts
    : posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
      ||
      post.body.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <div className="mb-6 w-full bg-blue-500 text-white h-14 flex justify-between items-center">
        <span className="ml-10 ">User {user.name} Posts</span>
        <button
          onClick={onLogout}
          className="bg-blue-900 rounded-full mr-10 py-1 px-2 cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="w-1/2 mx-auto mb-4">
        <TextInputComponent label="Search" onChange={(e) => handleSearchbar(e)} value={search} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 content-center justify-items-center">
        <NewPostCard setter={setPosts} />
        {posts &&
          filtered.map((element: any) => (
            <PostCard
              key={element.id}
              id={element.id}
              body={element.body}
              title={element.title}
              onClick={() => handleDeletePost(element.id)}
            />
          ))}
      </div>
    </>
  );
};
