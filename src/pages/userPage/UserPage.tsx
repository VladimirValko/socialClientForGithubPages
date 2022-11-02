import React from "react";
import User from "../../components/user/User";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const usersData = useSelector(
    (state: RootState) => state.authReducer.userData.user
  );

  const { userId } = useParams();
  const isMyPage = usersData?._id === userId;

  return <User isMyPage={isMyPage} />;
};

export default UserPage;
