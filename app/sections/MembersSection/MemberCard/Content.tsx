import { Member } from "@/types";
import React from "react";

interface ContentProps {
  member: Member;
}

const Content = ({ member }: ContentProps) => {
  return (
    <>
      <div
        className={`
          p-6
          text-center
        `}
      >
        {/* Name */}
        <h3
          className={`
            text-xl lg:text-3xl xl:text-2xl
            font-alexandria
            font-bold
            mb-5
            text-text_primary
          `}
        >
          {member.name}
        </h3>

        {/* Aspiration */}
        <p
          className={`
            text-lg lg:text-[1.8rem] xl:text-xl
            font-harmattan
            text-primary
            font-bold
            mb-3
            px-3
            py-1.5
            bg-primary_light
            rounded-full
          `}
        >
          {member.aspiration}
        </p>

        {/* Quote */}
        <p
          className={`
            text-base lg:text-[1.5rem] xl:text-lg
            font-harmattan font-medium
            text-text_primary
            opacity-80
            italic
            line-clamp-2
            h-[3rem] lg:h-[5rem] xl:h-[4rem]
            px-6 md:px-5
          `}
        >
          &ldquo;{member.quote}&rdquo;
        </p>
      </div>
    </>
  );
};

export default Content;
