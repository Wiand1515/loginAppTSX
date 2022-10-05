import React from "react";
import { Button } from "../common/ButtonComponent/Button";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string,
  body: string,
}

export const PostCard = ({ title, body, onClick }: Props) => {
  return (
    <div className="shadow-box w-10/12 rounded-md flex flex-col justify-between items-center">
      <div className="flex items-center py-4 px-2 border-b-2 border-gray-200 w-full">
        <img
          src={`https://picsum.photos/200`}
          alt="profile_avatar"
          className="rounded-full w-16 h-16 mx-2"
        />
        <p className="overflow-hidden whitespace-nowrap text-ellipsis hover:overflow-visible hover:whitespace-normal hover:h-auto">
          {title}
        </p>
      </div>
      <div className="p-2 pl-4 w-full h-full">
        <p className="break-words">{body}</p>
      </div>

      <Button
        label={"Delete Post"}
        className="bg-red-500 text-white font-bold w-11/12 mb-2"
        onClick={onClick}
      />
    </div>
  );
};
