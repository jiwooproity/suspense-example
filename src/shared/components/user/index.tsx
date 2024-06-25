import { Suspense } from "react";

import "./style/main.css";
import UserItem from "./ui/user-item";
import UserSkeleton from "./ui/skeleton";

const Skeleton = () => {
  return Array.from({ length: 6 }, (_, id) => {
    return { id };
  }).map((arr) => <UserSkeleton key={arr.id} />);
};

const User = () => {
  return (
    <div className="user-list">
      <Suspense fallback={<Skeleton />}>
        <UserItem />
      </Suspense>
    </div>
  );
};

export default User;
