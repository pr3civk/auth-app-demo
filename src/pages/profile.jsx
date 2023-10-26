const Profile = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  // console.log(user, "PROFILE");

  return (
    <div className="profile">
      <div className="profile-content">
        <img src={user.photos[0].value} alt="avatar" className="avatar-big" />
        <h1>Username: {user.displayName}</h1>
        <h2>Logged with: {user.provider}</h2>
      </div>
    </div>
  );
};

export default Profile;