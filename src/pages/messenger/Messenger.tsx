import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import { fetchConversations } from "../../redux/slices/ChatSlice";
import Messages from "../../components/messages/Messages";
import ChatLeftbar from "../../components/chatRightbar/ChatRightbar";

const Messenger: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(
    (state: RootState) => state.authReducer.userData.user
  );

  useEffect(() => {
    const getConversations = async () => {
      await dispatch(fetchConversations(user?._id));
    };
    getConversations();
  }, []);

  return (
    <>
      <Messages />
      <ChatLeftbar />
    </>
  );
};

export default Messenger;
