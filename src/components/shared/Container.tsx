import React from "react";
import { twMerge } from "tailwind-merge";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid justify-center justify-items-center w-full",
        className
      )}
    >
      <div className="max-w-[1440px] w-[100vw]">{children}</div>
    </div>
  );
};
