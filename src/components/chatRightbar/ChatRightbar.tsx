import React, { useEffect } from "react";
import "./chatRightbar.css";
import Conversation from "../conversations/Conversation";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchConversations } from "../../redux/slices/ChatSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const ChatLeftbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const friends = useSelector(
    (state: RootState) => state.authReducer.userData.user?.followins
  );
  const userId = useSelector(
    (state: RootState) => state.authReducer.userData.user?._id
  );
  const conversations = useSelector(
    (state: RootState) => state.chatReducer?.conversations
  );
  // filtering only friends, who i chat with
  const chatFriends = friends?.filter((friend) =>
    conversations.filter((conv) => friend == conv.members[1])
  );

  useEffect(() => {
    const getConversations = async () => {
      await dispatch(fetchConversations(userId));
    };
    getConversations();
  }, []);

  return (
    <>
      <div className="chatMenuMobile">
        <div className="chatMenuWrapperMobile">
          {chatFriends?.map((friend, i) => (
            <Conversation
              user={friend}
              key={friend}
              conversations={conversations}
            />
          ))}
        </div>
      </div>
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <span className="friendsTitle">Chats with Friends</span>
          {chatFriends?.map((friend, i) => (
            <Conversation
              user={friend}
              key={friend}
              conversations={conversations}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatLeftbar;
