export default function CallToAction(){
    return(
        <>
            <section className="mx-auto mt-20 flex min-h-72 w-[95%] flex-col items-center justify-center rounded-3xl border-2 border-border bg-bg2 shadow-xl shadow-shadow px-6 py-10 text-center sm:w-[85%] sm:px-10 md:w-[75%] lg:w-[60%] lg:py-12">

                {/* Title */}
                <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
                    با نکساتل بیشتر متصل بمون
                </h2>

                {/* Subtitle */}
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg lg:leading-8">
                    با بسته‌های متنوع و مقرون‌به‌صرفه، همیشه آنلاین و در ارتباط بمون.
                </p>

                {/* Button */}
                <button
                    type="button"
                    className="mt-12 rounded-2xl border-3 border-border-green bg-primary px-7 py-3.5 font-main text-sm font-bold text-bg1 transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:px-9 lg:py-4 lg:text-base"
                >
                    خرید بسته
                </button>

            </section>
        </>
    )
}