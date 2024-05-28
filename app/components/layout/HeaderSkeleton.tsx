const HeaderSkeleton = () => (
    <header className="bg-base-100 py-2 text-black">
        <div className="flex items-center gap-2">
            <button className="btn btn-square btn-ghost mr-auto flex md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
            <img src="logo.webp" alt="logo" className="h-8 md:h-16" />
            <label className="input input-sm input-bordered mx-auto hidden w-full max-w-xs items-center gap-2 md:flex">
                <input type="text" className="grow" placeholder="Search ..." />
                <svg width="16" height="16" className=" opacity-70">
                    <use href="#search" />
                </svg>
            </label>
            <div className="btn btn-ghost ms-auto flex md:hidden">
                <svg width="28" height="28">
                    <use href="#search" />
                </svg>
            </div>
            <div className="btn btn-ghost">
                <svg className="text-black" width="32" height="32">
                    <use href="#basket" />
                </svg>
            </div>
        </div>
        <div className="breadcrumbs px-1 py-2 text-sm">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>Sports Nutrition</li>
            </ul>
        </div>
    </header>
);

export default HeaderSkeleton;
