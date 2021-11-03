import { RewindIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import store from "store";
import { v4 as uuidv4 } from "uuid";

import UserBox from "../components/UserBox";
import { User } from "../shared/types";

const Config: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [RTChecked, setRTChecked] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setUsers(store.get("users"));
    setRTChecked(store.get("RT"));
  }, []);

  const removeTop = () => {
    saveLocal();
    router.push("/");
  };

  const saveLocal = () => {
    store.set("users", users);
    store.set("RT", RTChecked);
  };

  const toggleRTCecked = () => {
    setRTChecked(!RTChecked);
  };

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
    <div className="h-screen text-white bg-gray-700">
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
                inputUser={user}
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

      <div className="py-4 mt-8">
        <div className="">
          <p className="text-xl text-center">設定</p>
          <div className="flex justify-center">
            <label
              htmlFor="toogleA"
              className="flex items-center mt-4 cursor-pointer"
            >
              <Switch onChange={toggleRTCecked} checked={RTChecked} />
              <div
                className="ml-3 font-medium text-white"
                onClick={toggleRTCecked}
              >
                RT も表示する
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 p-1 m-4 bg-gray-400 rounded-full shadow-xl">
        <RewindIcon onClick={removeTop} className="w-10 h-10 rounded" />
      </div>
    </div>
  );
};

export default Config;
