import { XIcon } from "@heroicons/react/solid";
import { FormEvent, useState, VFC } from "react";

interface Props {
  index: number;
  deleteFunc: (user: string) => void;
  changeFunc: (index: number, userName: string) => void;
}

const UserBox: VFC<Props> = ({ index, deleteFunc, changeFunc }) => {
  const [user, setUser] = useState<string>("");

  const changeUser = (e: FormEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value);
    changeFunc(index, e.currentTarget.value);
  };

  const clikedDelete = () => {
    deleteFunc(user);
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
