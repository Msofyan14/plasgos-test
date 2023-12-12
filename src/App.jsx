function App() {
  return (
    <>
      <div className="max-w-5xl flex flex-col h-screen justify-center items-center">
        <div className="flex gap-x-10">
          <div className="flex flex-col gap-y-10 mt-[8.5rem]  -m-[0.1px]">
            <div className="bg-[#008D06] w-24 h-24 rotate-45 "></div>
          </div>

          <div className="flex flex-col gap-y-10 mt-[68px] mb-[6rem] -m-[4.1rem]">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="bg-[#6DAD1C] w-24 h-24 rotate-45 "
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-y-10">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-[#008D06] w-24 h-24 rotate-45 "
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-y-10 mt-[68px] mb-[6rem] -m-[4.1rem]">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="bg-[#6DAD1C] w-24 h-24 rotate-45 "
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-y-10 mt-[8.5rem]  -m-[0.5px]">
            <div className="bg-[#008D06] w-24 h-24 rotate-45 "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
