"use client"

import React, { useEffect, useRef, useState } from "react";

// Define types for the props
interface AccordionProps {
    title: string;
    content: string;
    active: boolean;
}

const Accordion: React.FC<AccordionProps> = (props) => {
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
        if (props.active)
            toggleAccordion();
    }, [props.active])

    return (
        <div className="accordion__section border-b-[2px] border-[#141414] mx-5">
            <div
                className={`accordion ${active ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <p className={`text-[#FFFFFF99] font-medium sm:text-[32px] text-[18px] sm:leading-[41.6px] leading-[24px] sm:max-w-full ${active && "text-white"} md:max-w-full max-w-[90%] `}>{props.title}</p>
                <div className="sm:w-[32px] sm:h-[32px] w-[28px] h-[28px] text-center flex justify-center items-center bg-[#141414] rounded-full">
                    <span className="text-[#FFFFFF66] sm:text-2xl text-xl">{active ? "−" : "+"}</span>
                </div>
            </div>
            <div
                ref={content}
                style={{ maxHeight: height }}
                className="accordion__content sm:mb-8 mb-6"
            >
                <div
                    className="font-medium text-base leading-[22.4px] text-[#FFFFFF99]"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default Accordion;
