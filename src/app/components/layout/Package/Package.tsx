type PackageType = {
  type: string;
  volume: number;
  duration: number;
  price: number;
};

export default function Package({ obj }: { obj: PackageType }) {
  
    const title = obj.type == 'internet' ? 'اینترنت'
    : obj.type == 'call' ? 'مکالمه' 
    : 'پیامک';

    const volume = obj.volume;

    const volumeType = obj.type == 'internet' ? 'GB'
    : obj.type == 'call' ? 'دقیقه' 
    : 'عدد';

    const duration = obj.duration;

    const price = obj.price.toLocaleString('en-Us');

    return(
        <>
            <div className="flex h-full w-full flex-col rounded-2xl border border-border bg-bg2 px-8 py-4 shadow-xl shadow-shadow">

              {/* Title */}
              <h2 className="py-4 border-b-2 border-border text-center text-2xl font-bold">
                {title}
              </h2>

              {/* Package Info */}
              <div className="py-4 flex items-center border-b-2 border-border">

                {/* Volume */}
                <div className="w-1/2 flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-medium text-secondary">{volume}</span>
                  <span className="text-lg font-medium">{volumeType}</span>
                </div>

                {/* Divider */}
                <div className="h-10 w-0.5 bg-border shrink-0" />

                {/* Duration */}
                <div className="w-1/2 flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-medium text-secondary">{duration}</span>
                  <span className="text-lg font-medium">روزه</span>
                </div>

              </div>

              {/* Price */}
              <div className="py-5 flex items-baseline justify-center gap-2">
                <span className="text-3xl font-bold text-primary self-center">
                  {price}
                </span>
                <span className="text-sm font-medium self-center">
                  تومان
                </span>
              </div>

              {/* Buy Button */}
              <button
                type="button"
                className="mb-4 w-full rounded-2xl border-3 border-border-green bg-primary py-3 text-base font-bold text-bg1 transition duration-200 hover:scale-[1.02] hover:shadow-2xl shadow-shadow active:scale-[0.98]"
              >
                خرید بسته
              </button>

            </div>
        </>
    )
}