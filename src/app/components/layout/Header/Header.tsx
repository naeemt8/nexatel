import Navbar from "./Navbar/Navbar";
import Image from "next/image";

export default function Header(){
    return(
        <>
            <Navbar />
            {/* <div>
                <Image src="/images/hero-phone.png" alt="img" width={500} height={500} />
                <div>
                    <h2>سریع‌تر وصل شو، بیشتر لذت ببر</h2>
                    <p>بسته مناسب خودت رو از بین گزینه‌های متنوع اینترنت، مکالمه و پیامک انتخاب کن.</p>
                    <button>خرید بسته</button>
                </div>
            </div> */}
        </>
    )
}