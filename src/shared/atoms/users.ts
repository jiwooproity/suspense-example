import axios, { AxiosResponse } from "axios";
import { selector } from "recoil";

interface User {
  username: string;
  phone: string;
  image: string;
}

interface Response {
  users: User[];
}

const getUserList = (): Promise<AxiosResponse<Response>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(axios.get("https://dummyjson.com/users"));
    }, 3000);
  });
};

export const userListSelector = selector<User[]>({
  key: "user-list-selector",
  get: async () => {
    const { data } = await getUserList();
    return data.users.slice(0, 6);
  },
});
