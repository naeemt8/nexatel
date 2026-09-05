import CallIcon from "./ServiceBoxIcons/CallIcon";
import InternetIcon from "./ServiceBoxIcons/InternetIcon";
import SmsIcon from "./ServiceBoxIcons/SmsIcon";

export default function ServiceBox({ pType }: { pType: string }) {

    const title =
    pType === "internet"
        ? "بسته‌های اینترنت"
        : pType === "call"
        ? "بسته‌های مکالمه"
        : "بسته‌های پیامک";

    const subtitle =
    pType === "internet"
        ? "بسته اینترنت مناسب خودت رو انتخاب کن و همیشه آنلاین بمون."
        : pType === "call"
        ? "با بسته‌های مکالمه اقتصادی، همیشه در دسترس عزیزانت باش."
        : "با بسته‌های پیامک، پیام‌هات رو سریع و راحت ارسال کن.";

  return (
    <div className="flex h-full w-full flex-col items-center rounded-2xl border border-border bg-bg2 shadow-xl shadow-shadow p-6 text-center">

      {/* Icon */}
        <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15">
            {pType === "internet" && <InternetIcon />}
            {pType === "call" && <CallIcon />}
            {pType === "sms" && <SmsIcon />}
        </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-bold text-white sm:text-2xl">
       {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-3 max-w-xs text-sm leading-6 text-white/70 sm:text-base">
        {subtitle}
      </p>

      {/* Button */}
      <button
        type="button"
        className="mt-10 rounded-xl bg-secondary border-3 border-border-blue px-8 py-3 text-sm font-bold text-bg1 transition duration-200 hover:scale-105 hover:shadow-lg active:scale-95 sm:text-base"
      >
        خرید بسته
      </button>

    </div>
  );
}