"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// Define types for the props
interface AccordionProps {
  title: string;
  content: string;
  active: boolean;
  index: number;
}

export const AccordionComponent: React.FC<AccordionProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const content = useRef<HTMLDivElement | null>(null); // Use proper ref type for div
  const [height, setHeight] = useState<string>("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  const toggleAccordion = () => {
    setActive((prevActive) => !prevActive);
    if (content.current) {
      setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }
  };

  useEffect(() => {
    if (props.active) toggleAccordion();
  }, [props.active]);

  return (
    <div
      className={`accordion__section md:py-8 accordion__${
        props.index + 1
      } border-b-[2px] border-[#141414]`}
    >
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p
          className={`text-[#FFFFFF99] font-semibold font-neue-display md:text-[32px] text-[20px] md:leading-[41.6px] leading-[26px] md:max-w-full ${
            active && "text-white"
          } md:max-w-full max-w-[90%]`}
        >
          {props.title}
        </p>
        <div className="md:w-[32px] md:h-[32px] w-[28px] h-[28px] text-center flex justify-center items-center bg-[#141414] rounded-full">
          <span className="text-[#FFFFFF66] md:text-2xl text-xl">
            {active ? "−" : "+"}
          </span>
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: height }}
        className={`accordion__content ${active ? "mt-[17px]" : ""} `}
      >
        <div
          className="font-medium text-base leading-[22.4px] text-[#FFFFFF99] font-neue-text md:w-[1135px] w-[296px]"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};
