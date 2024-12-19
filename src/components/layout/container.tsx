import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid justify-center justify-items-center w-full">
            <div className="max-w-[1440px] w-[100vw]">
                {children}
            </div>
        </div>
    );
};

export default Container;
