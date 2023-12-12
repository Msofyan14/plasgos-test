function App() {
  return (
    <>
      <div className="max-w-5xl flex flex-col h-screen justify-center items-center mx-auto">
        <div className="flex gap-x-10">
          <div className="flex flex-col gap-y-10 mt-[138px] -m-[0.5px]">
            <div className="bg-[#008D06] w-24 h-24 rotate-45 "></div>
          </div>

          <div className="flex flex-col gap-y-[42px] mt-[69px] mb-[6rem] -m-[66px]">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="bg-[#6DAD1C] w-24 h-24 rotate-45 "
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-y-[42px]">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-[#008D06] w-24 h-24 rotate-45 "
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-y-[42px] mt-[69px] mb-[6rem] -m-[66px]">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="bg-[#6DAD1C] w-24 h-24 rotate-45 "
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-y-10 mt-[138px]  -m-[0.5px]">
            <div className="bg-[#008D06] w-24 h-24 rotate-45 "></div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-lobster text-2xl md:text-5xl">
            Selamat Hari Raya Idul Fitri <br /> Mohon Maaf Lahir Dan Batin ❤
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
