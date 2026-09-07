import Navbar from "./Navbar/Navbar";
import Image from "next/image";

export default function Header(){
    return(
        <>
            <Navbar />
            <section className="mx-auto mt-28 flex w-[95%] flex-col overflow-hidden lg:mt-32 lg:w-[90%] md:flex-row">
                
                {/* Image */}
                <div className="relative flex w-full items-center justify-center lg:w-1/2">
                    <Image
                        src="/nexatel/images/hero-phone.png"
                        alt="اینترنت پرسرعت"
                        width={600}
                        height={600}
                        className="h-auto w-full max-w-md object-contain lg:max-w-none"
                        priority
                    />
                </div>

                {/* Text */}
                <div className="flex w-full flex-col items-center justify-center text-center lg:w-1/2">
                    
                    <h1 className="font-main text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
                        همیشه سریع، همیشه متصل
                    </h1>

                    <p className="mt-8 max-w-lg font-main text-sm font-normal leading-7 text-gray-300 sm:text-base xl:text-lg">
                        بسته اینترنت، مکالمه و پیامک مناسب خودت رو همین حالا انتخاب کن.
                    </p>

                    <button
                        type="button"
                        className="mt-12 rounded-2xl border-3 border-border-green bg-primary px-7 py-3.5 font-main text-sm font-bold text-bg1 transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:px-9 lg:py-4 lg:text-base"
                    >
                        خرید بسته
                    </button>

                </div>

            </section>
        </>
    )
}