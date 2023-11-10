"use client";
import React, { useState } from "react";
import TextTitle from "../Shared/TextTitle";
import UserCard from "./UserCard";

type Props = {
  description: {
    para1: string;
    para2: string;
  };
  title2: string;
  description2: string;
  description2Limit: number;
};

export default function Details({
  description,
  title2,
  description2,
  description2Limit,
}: Props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const words = description2.split(" ");
  const displayText = showMore
    ? description2
    : words.slice(0, description2Limit).join(" ");

  return (
    <div className="max-w-layout mx-auto my-10 px-2">
      <div className="flex flex-col md:flex-row gap-4 justify-between ">
        <div className="flex flex-col gap-11">
          <div className="max-w-[820px] flex flex-col gap-5 ">
            <TextTitle title="Description" />
            <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
              <p>{description.para1}</p>
              <p>{description.para2}</p>
            </div>
          </div>
          <div className="max-w-[680px] flex flex-col gap-5 ">
            <TextTitle title={title2} />
            <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
              <p>
                {displayText}
                {!showMore && (
                  <span
                    className="text-primary underline cursor-pointer"
                    onClick={toggleShowMore}
                  >
                    {" Read more"}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  );
}
