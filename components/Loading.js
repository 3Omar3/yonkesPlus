import React from "react";
import Lottie from "react-lottie";

// animation
import loader from "../public/animations/loader.json";

function Loading({ loading = false }) {
  if (!loading) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex absolute bg-white h-screen w-screen z-10 justify-center items-center opacity-80">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        className="select-none"
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
}

export default Loading;
