"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
  {
    question: "اگر قبل از تمام شدن اعتبار بسته، حجم یا دقیقه‌های آن تمام شود چه اتفاقی می‌افتد؟",
    answer:
      "با تمام شدن حجم اینترنت، دقیقه مکالمه یا تعداد پیامک‌های بسته، استفاده از همان سرویس دیگر از ظرفیت بسته انجام نمی‌شود. در این شرایط می‌توانید در صورت نیاز یک بسته جدید خریداری کنید. توجه داشته باشید که اعتبار زمانی بسته با تمام شدن حجم آن متوقف نمی‌شود و بسته تا پایان مدت اعتبار خود فعال باقی می‌ماند.",
  },
  {
    question: "آیا می‌توانم قبل از تمام شدن بسته فعلی، یک بسته دیگر هم خریداری کنم؟",
    answer:
      "بله، امکان خرید بسته جدید در زمانی که بسته قبلی هنوز فعال است وجود دارد. بسته جدید مطابق شرایط و مدت اعتبار خودش در حساب شما ثبت می‌شود. اگر چند بسته از یک نوع سرویس داشته باشید، میزان اعتبار و زمان انقضای هر بسته باید مطابق اطلاعات همان بسته بررسی شود.",
  },
  {
    question: "اگر بسته را خریداری کنم اما پرداخت ناموفق باشد، چه اتفاقی برای مبلغ پرداختی می‌افتد؟",
    answer:
      "در صورتی که تراکنش ناموفق باشد، بسته‌ای برای شماره شما فعال نخواهد شد. اگر مبلغی از حساب شما کسر شده باشد اما وضعیت پرداخت در سامانه موفق ثبت نشده باشد، تراکنش ابتدا بررسی می‌شود و در صورت تأیید نشدن پرداخت، مبلغ طبق روند بانکی به حساب مبدأ بازگردانده خواهد شد. در صورت ادامه مشکل، می‌توانید اطلاعات تراکنش را در اختیار پشتیبانی قرار دهید تا وضعیت آن بررسی شود.",
  },
  {
    question: "آیا حجم یا اعتبار باقی‌مانده بسته بعد از پایان مدت اعتبار قابل استفاده است؟",
    answer:
      "خیر، هر بسته تا پایان مدت اعتبار تعیین‌شده برای همان بسته قابل استفاده است. اگر در زمان پایان اعتبار، بخشی از حجم اینترنت، دقایق مکالمه یا پیامک‌های بسته باقی مانده باشد، مقدار باقی‌مانده نیز همراه با پایان اعتبار بسته منقضی می‌شود؛ بنابراین بهتر است قبل از پایان اعتبار، از ظرفیت باقی‌مانده بسته استفاده کنید.",
  },
];

  const handleQuestionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto mt-30 w-[95%] lg:w-[90%]">

      {/* Title */}
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
        سوالات متداول
      </h2>

      {/* Questions */}
      <div className="flex flex-col gap-4">

        {questions.map((_, index) => (
          <div key={index} className="overflow-hidden rounded-2xl">

            {/* Question */}
            <button
              type="button"
              onClick={() => handleQuestionClick(index)}
              className="flex w-full items-center justify-between rounded-2xl border border-border bg-bg2 px-5 py-4 text-right transition hover:bg-bg2/90 "
            >
              <span className="text-md lg:text-lg">
                {_.question}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-2 min-h-24 text-sm lg:text-md rounded-2xl border border-border bg-bg2 p-5 shadow-xl shadow-shadow">
                  {_.answer}
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}