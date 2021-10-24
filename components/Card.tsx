import Image from "next/image";
import { VFC } from "react";

interface Props {
  text: string;
}

const Card: VFC<Props> = ({ text }) => {
  return (
    <div className="p-3 m-3 w-80 text-white rounded border border-white">
      <div className="flex">
        <div className="relative w-14 h-14">
          <Image
            className="rounded-full"
            src="/pro_exam1.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="ml-2">
          <p className="text-lg">username</p>
          <p className="text-sm text-gray-400">time</p>
        </div>
      </div>

      <div className="relative mt-2 h-80 rounded-3xl">
        <Image src="/exam1.jpg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Card;
