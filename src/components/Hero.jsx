export default function Hero({ isDark }) {
  return (
    <div
      className="flex flex-col w-screen relative items-center mt-10"
      style={{
        fontFamily: "Pixelify Sans",
      }}
      id={`hero${isDark ? "-dark" : ""}`}
    >
      <div className="mr-auto ml-auto rounded-lg z-1 mt-20">
        <h1 className=" font-extrabold text-9xl text-center">Hello!</h1>
        <h2 className="font-extrabold text-8xl text-center mt-10">
          I am Arunit Chakraborty
        </h2>
        <h3 className="font-bold text-center text-5xl mt-18">
          An aspiring full stack web developer
        </h3>
      </div>
    </div>
  );
}
