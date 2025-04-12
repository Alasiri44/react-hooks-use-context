import React, {useContext} from "react";
import Interests from "./Interests";
import { UserContext } from "../context/user";

function Profile() {
  // Call context with our created UserContext
  const {user} = useContext(UserContext);
  const {theme} = useContext(UserContext);

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
