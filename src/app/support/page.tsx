import Faq from "../components/layout/Faq/Faq";
import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Header/Navbar/Navbar";

export default function Support() {
  return (
    <>
      <Navbar />

      <main className="mx-auto mt-32 mb-20 w-[95%] lg:w-[90%]">
        {/* Header */}
        <section className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            چطور می‌تونیم کمکت کنیم؟
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
            اگر سوالی درباره خرید، فعال‌سازی یا بسته‌های نکساتل داری،
            از طریق راه‌های ارتباطی زیر با ما در تماس باش.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-bg2 p-6 text-center shadow-xl shadow-shadow">
            <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <span className="text-2xl text-primary">✉</span>
            </div>

            <h2 className="mt-4 font-bold text-white">ایمیل</h2>
            <p className="mt-2 text-sm text-white/60">
              support@nexatel.ir
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-bg2 p-6 text-center shadow-xl shadow-shadow">
            <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <span className="text-2xl text-primary">☎</span>
            </div>

            <h2 className="mt-4 font-bold text-white">پشتیبانی تلفنی</h2>
            <p className="mt-2 text-sm text-white/60">
              021-00000000
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-bg2 p-6 text-center shadow-xl shadow-shadow">
            <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <span className="text-2xl text-primary">◷</span>
            </div>

            <h2 className="mt-4 font-bold text-white">ساعات پاسخگویی</h2>
            <p className="mt-2 text-sm text-white/60">
              هر روز، ۹ تا ۲۲
            </p>
          </div>
        </section>

        {/* FAQ */}
        <Faq />
      </main>

      <Footer />
    </>
  );
}