import Package from "../Package/Package";

export default function PopularPackages(){

    const popularList = [
        {
            type: "internet",
            volume: 20,
            duration: 60,
            price: 145000,
        },
        {
            type: "call",
            volume: 1500,
            duration: 30,
            price: 120000,
        },
        {
            type: "sms",
            volume: 200,
            duration: 3,
            price: 7000,
        },
    ]

    return(
        <>
            <section className="mx-auto w-[95%] lg:w-[90%] py-8">

                {/* Title */}
                <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
                    محبوب ترین ها
                </h2>

                {/* Packages */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-20 lg:gap-12 xl:gap-20">

                    {/* Package 1 */}
                    <div className="min-h-60">
                    <Package obj = {popularList[0]}/>
                    </div>

                    {/* Package 2 */}
                    <div className="min-h-60">
                    <Package obj = {popularList[1]}/>
                    </div>

                    {/* Package 3 */}
                    <div className="min-h-60 sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:mx-0 lg:w-full">
                    <Package obj = {popularList[2]}/>
                    </div>

                </div>

            </section>
        </>
    )
}