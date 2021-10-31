import { RewindIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import UserBox from "../components/UserBox";
import { User } from "../shared/types";

const Config: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const localUsersString: string | null = localStorage.getItem("users");
  //   if (localUsersString) {
  //     const localUsers = localUsersString?.split(",");
  //     setUsers(localUsers);
  //   }
  // }, []);

  const addUser = () => {
    const newUsers = users.concat();
    newUsers.push({
      userName: "",
      id: uuidv4(),
    });
    setUsers(newUsers);
  };

  const deleteUser = (deleteUser: User) => {
    const newUsers = users.filter((user) => user.id !== deleteUser.id);
    setUsers(newUsers);
  };

  const changeUser = (changeUser: User) => {
    const newUsers = users.map((user) => {
      return user.id === changeUser.id ? changeUser : user;
    });
    setUsers(newUsers);
  };

  return (
    <div className="text-white bg-gray-700">
      <div className="">
        <p className="py-4 text-2xl text-center">Twitter 画像だけ</p>
      </div>

      <div className="">
        <p className="py-4 text-xl text-center">見たいユーザの変更</p>

        <div className="">
          {users.map((user) => {
            return (
              <UserBox
                key={user.id}
                id={user.id}
                changeFunc={changeUser}
                deleteFunc={deleteUser}
              />
            );
          })}
        </div>

        <div className="flex justify-center m-3">
          <button
            className="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded"
            onClick={addUser}
          >
            追加
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 p-1 m-4 bg-gray-400 rounded-full shadow-xl">
        <Link href="/">
          <RewindIcon className="w-10 h-10 rounded" />
        </Link>
      </div>
    </div>
  );
};

export default Config;
