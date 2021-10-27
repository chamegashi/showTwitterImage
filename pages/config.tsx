import { RewindIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Content } from "./api/api";

const Home: NextPage = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [users, setUsers] = useState<string>("");

  useEffect(() => {
    const localUsers: string | null = localStorage.getItem("users");
    if (localUsers) {
      setUsers(localUsers);
    }
  }, []);

  return (
    <div className="text-white bg-gray-700">
      <div className="">
        <p className="py-4 text-2xl text-center">Twitter 画像だけ</p>
      </div>

      <div className="fixed bottom-0 left-0 p-1 m-4 bg-gray-400 rounded-full shadow-xl">
        <Link href="/">
          <RewindIcon className="w-10 h-10 rounded" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
