function LanguageSkeleton() {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-1 justify-end px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
                            EN
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[1] mt-4 w-52 rounded-box border-2 border-black bg-base-100 p-2 text-black shadow-xl"
                        >
                            <li>
                                <a>EN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguageSkeleton;
