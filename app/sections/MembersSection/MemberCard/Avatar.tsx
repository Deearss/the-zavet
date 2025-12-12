import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const Avatar = () => {
  return (
    <>
      <div
        className={`
          relative
          h-56
          bg-gradient-to-b
          from-white
          to-primary_light/30
          flexc
          overflow-hidden
        `}
      >
        <div
          className={`
            w-32 h-32
            rounded-full
            bg-white
            flexc
            shadow-lg
            group-hover:scale-110
            transall
          `}
        >
          <DotLottieReact
            src="https://lottie.host/0dd9aa43-943b-43d2-8247-b6bcfab73ed2/lcIfotseiW.lottie"
            loop
            autoplay
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;
