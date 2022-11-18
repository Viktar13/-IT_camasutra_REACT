import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How ara you?' likesCounts='4'/>
        <Post message="it's my first post!" likesCounts='23'/>  
        {/* <Post />
        <Post />        */}
      </div>
    </div>
  );
};

export default MyPosts;
