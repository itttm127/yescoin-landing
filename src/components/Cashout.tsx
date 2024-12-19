const CashoutComponent = () => {
  return (
    <>
      <div className="w-full sm:mt-[100px] -mt-7 sm:px-0 px-5 outline-yellow-500">
        <div className="flex justify-center items-center outline-4 outline-yellow-400">
          <div className="w-full flex justify-center items-center">
            <div className="relative sm:h-28 h-11 flex justify-center outline-yellow-400 ">
              <h1 className="text-white absolute z-20 font-semibold sm:text-9xl text-4xl sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap outline-8 outline-yellow-400">
                Already cashed out
              </h1>
              <h1 className="absolute top-0 text-white font-semibold sm:text-9xl text-4xl filter blur-sm sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap">
                Already cashed out
              </h1>
              <h1 className="z-0 absolute -top-4 bg-gradient-to-t from-[#ffd044] to-[#5224bc] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-4xl sm:leading-[128px] leading-[58.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap">
                Already cashed out
              </h1>
              <h1 className="-z-[2] absolute top-0 bg-gradient-to-t from-[#db8354] to-[#EBEAF8] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-4xl sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap outline-yellow-500">
                Already cashed out
              </h1>
              <h1 className="-z-[4] absolute top-0 bg-gradient-to-t from-[#f1bc48] to-[#dfc023] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-4xl sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap">
                Already cashed out
              </h1>
              <h1 className="-z-[6] absolute top-0 opacity-25 bg-gradient-to-t from-[#e3bf46] to-[#d761cb] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-4xl sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap">
                Already cashed out
              </h1>
              <h1 className="-z-[8] absolute top-0 bg-gradient-to-t from-[#6e3ab7fd] to-[#b41492] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-4xl sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap">
                Already cashed out
              </h1>
              <h1 className="-z-[10] absolute top-0 bg-gradient-to-t from-[#321607] to-[#0A0925] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-4xl sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none text-nowrap">
                Already cashed out
              </h1>
              <h1 className="-z-[10] absolute top-10 bg-gradient-to-t from-[#b046d6] to-[#a306cf] bg-clip-text text-transparent blur-2xl font-semibold sm:text-9xl text-4xl sm:leading-[128px] underline-offset-[from-font] decoration-skip-ink-none text-nowrap outline-yellow-200">
                Already cashed out
              </h1>
              <div className="absolute bg-banner-gradient filter blur-[60px] h-full w-[115%] -z-10 top-10 outline-yellow-400" />
            </div>
          </div>
          {/* <h1 className="text-white text-center bg-banner-gradient backdrop-blur-[160px] font-semibold sm:text-9xl text-5xl sm:leading-[128px] leading-[52.8px] tracking-[0.035em] underline-offset-[from-font] decoration-skip-ink-none">Already cashed out</h1> */}
        </div>
        <div className="w-full flex justify-center items-center sm:-mt-[60px] -mt-[30px]">
          <div className="sm:w-[820px] sm:h-[450px] w-full h-[240px] bg-[#0000001A] z-[20] border-[5px] border-[#ececdb0d] backdrop-blur-sm rounded-3xl flex justify-center items-center mt-10 ">
            {/* <div className="absolute left-0 bottom-3 w-[3px] h-1/2 bg-gradient-to-t from-yellow-500 to-transparent" />
              <div className="absolute left-3 bottom-0 w-1/2 h-[1px] bg-gradient-to-r from-yellow-500 to-transparent" /> */}
            <div
              className="absolute right-0 bottom-8 sm:top-[44%] top-[37%] w-[3px] h-1/2 bg-gradient-to-t from-yellow-200 to-transparent"
              style={{
                left: "-4px",
                background:
                  "linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 222, 89, 0.3), transparent)",
              }}
            />

            {/* Bottom border gradient */}
            <div
              className="absolute sm:left-[3%] left-[7%] bottom-0 w-1/2 h-[1px] bg-gradient-to-r from-yellow-200 to-transparent"
              style={{
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 222, 89, 0.8), transparent)",
                bottom: "-2px", border: "2px",
              }}
            />

            {/* Rounded corner connection */}
            <div className="absolute bottom-0 left-0 w-8 h-8">
              <div
                className="absolute bottom-0 left-0 w-full h-full rounded-bl-full border-b border-1 border-yellow-200"
                style={{ borderLeft: "3px solid rgba(220, 255, 220, 0.8)", position: "relative", left: "-4px", top: "2px" }}
              />
            </div>

            <div>
              <p className="text-white font-semibold sm:text-5xl text-[32px] sm:leading-[52.8px] leading-[35.2px] text-center">
                This month
              </p>
              <div className="relative sm:h-28 h-11 flex justify-center">
                <h1 className="text-white absolute z-10 font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="absolute top-0 text-white filter blur-sm font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="z-0 absolute top-0 bg-gradient-to-b from-[#bfe445] to-[#8582D5] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="-z-[2] absolute top-0 bg-gradient-to-b from-[#eb503f] to-[#EBEAF8] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="-z-[4] absolute top-0 bg-gradient-to-b from-[#FDD3BE] to-[#C2C0EA] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="-z-[6] absolute top-0 bg-gradient-to-b from-[#F9915C] to-[#5C58C7] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="-z-[8] absolute top-0 bg-gradient-to-b from-[#d040d0] to-[#292594] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="-z-[10] absolute top-0 bg-gradient-to-b from-[#321607] to-[#0A0925] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <h1 className="-z-[10] absolute top-3 bg-gradient-to-b from-[#4c2d62] to-[#d80edf] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">
                  $565,135.78
                </h1>
                <div className="absolute bg-banner-gradient filter blur-[80px] w-full h-1/2 -z-10 top-5" />
              </div>
              {/* <h1 className="text-white mt-2 bg-banner-gradient font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">$565,135.78</h1> */}
              <p className="text-white sm:mt-10 mt-4 font-medium sm:text-xl sm:leading-7 text-base leading-[22.4px] text-center">
                Cashed out
              </p>
            </div>
          </div>
        </div>
      </div>
      z
    </>
  );
};

export default CashoutComponent;
