import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import device from "./assets/device.png";
import book from "./assets/book.png";
import server from "./assets/server.png";
import tools from "./assets/tools.png";

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <div
      className=" max-w-screen min-h-screen flex flex-col bg-base dark:bg-base items-center overflow-hidden p-4"
      data-theme={isDark ? "coffee" : "retro"}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <div style={{ fontFamily: "Pixelify Sans" }}>
        {/* tech */}
        <div className="w-screen p-6" id="tech">
          <h2 className="bold text-6xl mt-30 text-center">Technologies</h2>
          <div className="flex gap-3 justify-between">
            <div className="card mt-8 bg-accent p-10 rounded-none pixelated border-4 border-[#e6b566] shadow-[4px_4px_0_#000]">
              <div className="flex gap-4 items-center">
                <h3 className="text-4xl underline">Languages</h3>
                <img src={device} className="block w-10 h-10" />
              </div>
              <ul className="text-3xl p-6 list-disc">
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  C
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  C++
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  python
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  JavaScript
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Rust
                </li>
              </ul>
            </div>
            <div className="card mt-8 bg-accent p-10">
              <div className="flex gap-4 items-center">
                <h3 className="text-3xl underline">
                  Frameworks/
                  <br />
                  Libraries
                </h3>
                <img src={book} className="block w-10 h-10" />
              </div>
              <ul className="text-3xl p-6 list-disc">
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  React
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Vue
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Tailwind
                </li>
              </ul>
            </div>
            <div className="card mt-8 bg-accent p-10">
              <div className="flex gap-4 items-center">
                <h3 className="text-4xl underline">Database</h3>
                <img src={server} className="block w-10 h-10" />
              </div>
              <ul className="text-3xl p-6 list-disc">
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  MongoDB
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Supabase
                </li>
              </ul>
            </div>
            <div className="card mt-8 bg-accent p-10">
              <div className="flex gap-4 items-center">
                <h3 className="text-4xl underline">Tools</h3>
                <img src={tools} className="block w-10 h-10" />
              </div>
              <ul className="text-3xl p-6 list-disc">
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Git
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Github
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Postman
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  VsCode
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Linux
                </li>
                <li className="p-2 hover:bg-amber-500 rounded-xl dark:hover:bg-cyan-500">
                  Figma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
