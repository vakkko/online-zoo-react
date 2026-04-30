import type { UserInfoAndSignOutProps } from "./UserInfoAndSignOut.types";

import "./UserInfoAndSignOut.scss";

const UserInfoAndSignOut: React.FC<UserInfoAndSignOutProps> = ({
  username,
  userEmail,
  handleAuthorizationClose,
}) => {
  const handleSignOut = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    handleAuthorizationClose();
  };

  return (
    <div className="user-info-container">
      <ul>
        <li>{username}</li>
        <li>{userEmail}</li>
      </ul>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default UserInfoAndSignOut;
