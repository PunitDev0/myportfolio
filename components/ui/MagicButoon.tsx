"use client";
import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  OtherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  OtherClasses?: string;
}) => {
  const handleRedirect = () => {
    if (handleClick) {
      handleClick();
    }
    window.open("https://github.com/PunitDev0", "_blank"); // Opens the link in a new tab
  };

  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ${OtherClasses}`}
      onClick={handleRedirect}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
