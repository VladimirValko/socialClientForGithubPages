import "./leftbar.css";
import { MdRssFeed, MdVideoLibrary, MdOutlineWeb } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { SiYoutubemusic, SiTinder } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaUserFriends, FaUserAlt } from "react-icons/fa";
import Birthday from "../../assets/gift.png";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { toggleMobileMenu } from "../../redux/slices/AuthSlice";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(
    (state: RootState) => state.authReducer?.userData?.user
  );
  const isMobile = useSelector(
    (state: RootState) => state.authReducer.mobileStatus
  );

  const toggleMenu = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <>
      <div className="leftbar">
        <div className="leftbarWrapper">
          <ul className="leftbarList">
            <li className="leftbarListItem">
              <MdRssFeed className="leftbarListItemIcon" />
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="leftbarListItemText link">Feed</span>
              </Link>
            </li>
            <li className="leftbarListItem">
              <FaUserFriends className="leftbarListItemIcon" />
              <Link to="/users" style={{ textDecoration: "none" }}>
                <span className="leftbarListItemText link">People</span>
              </Link>
            </li>
            <li className="leftbarListItem">
              <BsFillChatLeftTextFill className="leftbarListItemIcon" />
              <Link to="/messenger" style={{ textDecoration: "none" }}>
                <span className="leftbarListItemText link">Chats</span>
              </Link>
            </li>
            <li className="leftbarListItem">
              <MdVideoLibrary className="leftbarListItemIcon" />
              <Link to="/videos" style={{ textDecoration: "none" }}>
                <span className="leftbarListItemText link">Videos</span>
              </Link>
            </li>
            <li className="leftbarListItem">
              <SiYoutubemusic className="leftbarListItemIcon" />

              <Link to="/music" style={{ textDecoration: "none" }}>
                <span className="leftbarListItemText link">Music</span>
              </Link>
            </li>
            <li className="leftbarListItem">
              <SiTinder className="leftbarListItemIcon" />
              <span className="leftbarListItemText">Finder</span>
            </li>
            <li className="leftbarListItem">
              <MdOutlineWeb className="leftbarListItemIcon" />
              <span className="leftbarListItemText">Groups</span>
            </li>
          </ul>
          <div className="premiumBtn">
            <button className="leftbarBtn">Try Premium</button>
          </div>
          <hr className="leftbarHR" />
          <div className="birthdayContainer">
            <img src={Birthday} alt="birthday" className="birthdayImg" />
            <span className="birthdayText">
              <b>Mister Anderson</b> and <b>3 others</b> have a birthday today
            </span>
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="leftbarMobile">
          <div className="leftbarWrapper">
            <ul className="leftbarList">
              <li className="leftbarListItem" onClick={toggleMenu}>
                <MdRssFeed className="leftbarListItemIcon" />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="leftbarListItemText link">Feed</span>
                </Link>
              </li>
              <li className="leftbarListItem" onClick={toggleMenu}>
                <FaUserAlt className="leftbarListItemIcon" />
                <Link
                  to={`/profile/${user?._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <span className="leftbarListItemText link">My Page</span>
                </Link>
              </li>
              <li className="leftbarListItem" onClick={toggleMenu}>
                <FaUserFriends className="leftbarListItemIcon" />
                <Link to="/users" style={{ textDecoration: "none" }}>
                  <span className="leftbarListItemText link">People</span>
                </Link>
              </li>
              <li className="leftbarListItem" onClick={toggleMenu}>
                <BsFillChatLeftTextFill className="leftbarListItemIcon" />
                <Link to="/messenger" style={{ textDecoration: "none" }}>
                  <span className="leftbarListItemText link">Chats</span>
                </Link>
              </li>
              <li className="leftbarListItem" onClick={toggleMenu}>
                <MdVideoLibrary className="leftbarListItemIcon" />
                <Link to="/videos" style={{ textDecoration: "none" }}>
                  <span className="leftbarListItemText link">Videos</span>
                </Link>
              </li>
              <li className="leftbarListItem" onClick={toggleMenu}>
                <SiYoutubemusic className="leftbarListItemIcon" />

                <Link to="/music" style={{ textDecoration: "none" }}>
                  <span className="leftbarListItemText link">Music</span>
                </Link>
              </li>
              <li className="leftbarListItem">
                <SiTinder className="leftbarListItemIcon" />
                <span className="leftbarListItemText">Finder</span>
              </li>
              <li className="leftbarListItem">
                <MdOutlineWeb className="leftbarListItemIcon" />
                <span className="leftbarListItemText">Groups</span>
              </li>
            </ul>
            <div className="premiumBtn">
              <button className="leftbarBtn">Try Premium</button>
            </div>
            <hr className="leftbarHR" />
            <div className="birthdayContainer">
              <img src={Birthday} alt="birthday" className="birthdayImg" />
              <span className="birthdayText">
                <b>Mister Anderson</b> and <b>3 others</b> have a birthday today
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
