import { XIcon } from "@heroicons/react/solid";
import { FormEvent, useState, VFC } from "react";

import { User } from "../shared/types";

interface Props {
  id: string;
  deleteFunc: (user: User) => void;
  changeFunc: (userName: User) => void;
}

const UserBox: VFC<Props> = ({ id, deleteFunc, changeFunc }) => {
  const [user, setUser] = useState<string>("");
  const [boxId, setBoxId] = useState<string>(id);

  const changeUser = (e: FormEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value);
    changeFunc({
      userName: e.currentTarget.value,
      id: boxId,
    });
  };

  const clikedDelete = () => {
    deleteFunc({
      userName: user,
      id: boxId,
    });
  };

  return (
    <div className="flex justify-center p-1 m-1">
      <button className="mr-1" onClick={clikedDelete}>
        <XIcon className="h-6 text-gray-400" />
      </button>
      <input
        type="text"
        className="py-1 px-2 text-lg bg-gray-700 rounded-xl border border-white"
        value={user}
        onChange={changeUser}
      ></input>
    </div>
  );
};

export default UserBox;
