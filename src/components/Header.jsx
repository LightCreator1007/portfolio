import myPic from "../assets/myPic.png";

export default function Header({ isDark, setIsDark }) {
  return (
    <div className="navbar bg-base-100 min-w-screen flex shadow-md justify-between p-5">
      <div className="w-15 rounded-full">
        <img src={myPic} alt="my picture" className="rounded-full" />
      </div>
      <nav>
        <ul
          className="flex justify-between items-center gap-4"
          style={{ fontFamily: "Pixelify Sans" }}
        >
          <li>
            <button className="btn btn-ghost border-none rounded-md text-3xl">
              <a href="#tech">Tech</a>
            </button>
          </li>
          <li>
            <button className="btn btn-ghost border-none rounded-md text-3xl">
              <a href="#projects">Projects</a>
            </button>
          </li>
          <li>
            <button className="btn btn-ghost border-none rounded-md text-3xl">
              <a href="#about">About</a>
            </button>
          </li>
          <li>
            <button className="btn btn-ghost border-none rounded-md text-3xl">
              <a href="#connect">Connect</a>
            </button>
          </li>
        </ul>
      </nav>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value="coffee"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
        />
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <rect x="11" y="1" width="2" height="3" />
          <rect x="11" y="20" width="2" height="3" />
          <rect x="1" y="11" width="3" height="2" />
          <rect x="20" y="11" width="3" height="2" />
          <rect x="4" y="4" width="2" height="2" />
          <rect x="18" y="18" width="2" height="2" />
          <rect x="18" y="4" width="2" height="2" />
          <rect x="4" y="18" width="2" height="2" />
          <rect x="8" y="8" width="8" height="8" />
          <rect x="9" y="7" width="6" height="1" />
          <rect x="9" y="16" width="6" height="1" />
          <rect x="7" y="9" width="1" height="6" />
          <rect x="16" y="9" width="1" height="6" />
          <rect x="10" y="10" width="4" height="4" />
        </svg>

        {/* Pixelated Moon Icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="244.866,200.348 244.867,200.348 244.867,166.957 278.258,166.957 278.258,133.565 478.605,133.565 478.605,66.783 445.215,66.783 445.215,33.391 389.562,33.391 389.562,0 189.214,0 189.214,33.391 133.563,33.391 133.562,33.391 133.562,66.783 100.171,66.783 100.171,100.174 66.779,100.174 66.779,155.826 33.395,155.826 33.395,356.174 66.779,356.174 66.779,411.826 100.171,411.826 100.171,445.217 133.562,445.217 133.562,478.609 189.214,478.609 189.214,512 389.562,512 389.564,478.609 445.216,478.609 445.216,445.217 478.602,445.217 478.605,378.435 278.258,378.435 278.258,345.043 244.866,345.043 244.866,311.652 211.48,311.652 211.48,200.348" />
        </svg>
      </label>
    </div>
  );
}
