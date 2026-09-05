export default function HowItWorks(){
    return(
        <>
<section className="mx-auto mt-30 w-[95%] lg:w-[90%]">
  <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-border bg-bg2 shadow-xl shadow-shadow px-6 py-10 sm:px-10 sm:flex-row sm:gap-10 sm:py-12 md:gap-16 lg:gap-24">

    {/* انتخاب بسته */}
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-primary"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h15m-15 0A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25m-15 0v10.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 9.75h4.5m-4.5 3h3"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.25 13.5 1.5 6 1.5-2.25 2.25 1.5-5.25-5.25Z"
            />
        </svg>
      </div>

      <span className="mt-4 text-base font-bold sm:text-lg">
        انتخاب بسته
      </span>
    </div>

    {/* فلش */}
    <div className="my-5 text-3xl text-secondary md:my-0">
        <span className="inline-block sm:hidden">↓</span>
        <span className="hidden sm:inline-block">←</span>
    </div>

    {/* پرداخت */}
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-primary"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
        </svg>
      </div>

      <span className="mt-4 text-base font-bold sm:text-lg">
        پرداخت
      </span>
    </div>

    {/* فلش */}
    <div className="my-5 text-3xl text-secondary md:my-0">
        <span className="inline-block sm:hidden">↓</span>
        <span className="hidden sm:inline-block">←</span>
    </div>

    {/* فعال سازی */}
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-primary"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
            />
        </svg>
      </div>

      <span className="mt-4 text-base font-bold sm:text-lg">
        فعال سازی
      </span>
    </div>

  </div>
</section>
        </>
    )
}