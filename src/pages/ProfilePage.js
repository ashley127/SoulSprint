import { UserProfile  } from "@clerk/clerk-react";
 
import React from 'react'

const UserProfilePage = () => (
  <UserProfile path="/user-profile" routing="path" />
);
 
export default UserProfilePage;