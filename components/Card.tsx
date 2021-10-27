import dateFormat, { masks } from "dateformat";
import Image from "next/image";
import { VFC } from "react";

import { Content } from "../pages/api/api";

interface Props {
  content: Content;
}

const Card: VFC<Props> = ({ content }) => {
  masks.createTime = 'm"月"d"日" hh:mm:ss';
  const created = dateFormat(new Date(content.created), "createTime");

  return (
    <div className="p-3 m-3 w-80 text-white rounded border border-white">
      <div className="flex">
        <div className="relative w-14 h-14">
          <Image
            className="rounded-full"
            src={content.profile_image_url}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="ml-2">
          <p className="text-lg">{content.user}</p>
          <p className="text-sm text-gray-400">{created}</p>
        </div>
      </div>

      <div className="relative mt-2 h-80 rounded-3xl">
        <Image src={content.image_url} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Card;
