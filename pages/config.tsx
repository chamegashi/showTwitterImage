import { RewindIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import UserBox from "../components/UserBox";

interface User {
  user: string;
  id: string;
}

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
      user: "",
      id: "s",
    });
    setUsers(newUsers);
  };

  const deleteUser = (userName: string) => {
    console.log(users);
    const newUsers = users.filter((user) => user.user !== userName);
    setUsers(newUsers);
  };

  const changeUser = (index: number, userName: string) => {
    const newUsers = users.concat();
    newUsers[index].user = userName;
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
          {users.map((user, index) => {
            return (
              <UserBox
                key={user.id}
                index={index}
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
