import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="fudzi"
        />
      </div>
      <div>
        ava + description
        {/* <img
            src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            alt="Joda"
          /> */}
      </div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
        </div>
        <div className={s.item}>
          post 2
        </div>
      </div>
    </div>
  );
};

export default Profile;
