import "../style/user.css";
import { useRecoilValue } from "recoil";
import { userListSelector } from "@/shared/atoms/users";

type UserItemType = () => JSX.Element[];

const UserItem: UserItemType = () => {
  const userList = useRecoilValue(userListSelector);

  return userList.map((user) => (
    <div className="user-wrap">
      <div className="user-profile">
        <img src={user.image} />
      </div>
      <div className="user-info">
        <div className="user-name">{user.username}</div>
        <div className="user-description">{user.phone}</div>
      </div>
    </div>
  ));
};

export default UserItem;
