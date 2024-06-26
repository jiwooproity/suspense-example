import { Suspense } from "react";

import "./style/main.css";
import UserItem from "./ui/user-item";
import UserSkeleton from "./ui/skeleton";
import useLocation from "@/shared/hooks/use-location";

const Skeleton = () => {
  return Array.from({ length: 6 }, (_, id) => {
    return { id };
  }).map((arr) => <UserSkeleton key={arr.id} />);
};

const User = () => {
  const [refresh] = useLocation();

  return (
    <div className="user-list">
      <button className="refresh-btn" onClick={refresh}>
        Refresh
      </button>
      <Suspense fallback={<Skeleton />}>
        <UserItem />
      </Suspense>
    </div>
  );
};

export default User;
