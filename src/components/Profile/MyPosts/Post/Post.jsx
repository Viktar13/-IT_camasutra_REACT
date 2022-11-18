import s from "./Post.module.css";

const Post = (props) => {

  // debugger;
  // console.log(props.message);

  return (
  <div className={s.item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wIM1l36lND_jsEwki3UCnRpcTzs-AfPv-A&usqp=CAU"></img>
    { props.message }
    <div>
      <span>like</span> { props.likesCounts }
    </div>
  </div>
  );
};

export default Post;
 