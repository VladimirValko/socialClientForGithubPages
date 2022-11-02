import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import UsersList from "../../components/usersList/UsersList";

const People: React.FC = () => {
  return (
    <>
      <UsersList />
      <Rightbar />
    </>
  );
};

export default People;
