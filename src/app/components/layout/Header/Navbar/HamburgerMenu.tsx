export default function HambergerMenu({ isOpen }: { isOpen: boolean }) {
    return(
        <>
            <div
                className={`fixed top-[calc(1rem+4.5rem+0.5rem)] left-1/2 z-40 w-[calc(100%-1rem)] rounded-2xl border-2 border-border bg-bg2 px-2 py-5 shadow-lg backdrop-blur-md transition-all duration-300 lg:w-[calc(100%-2rem)] ${
                    isOpen
                    ? "translate-x-[-50%] translate-y-0 opacity-100"
                    : "translate-x-[-50%] -translate-y-8 pointer-events-none opacity-0"
                }`}
            >
                <ul className="flex flex-row items-center justify-around gap-2 text-xs min-[460px]:text-sm font-medium">
                    <li>
                        <a href="#" className="block transition hover:text-primary">
                            صفحه اصلی
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-primary">
                            اینترنت
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-primary">
                            مکالمه
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-primary">
                            پیامک
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-primary">
                            پشتیبانی
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}