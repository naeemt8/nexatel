import ServiceBox from "./ServiceBox/ServiceBox";

export default function Services() {
  return (
    <section className="mx-auto mt-30 w-[95%] lg:w-[90%]">

      <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">
        همه چیز برای ارتباط بهتر
      </h2>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-15">

        <div className="min-h-72">
          <ServiceBox pType="internet" />
        </div>

        <div className="min-h-72">
          <ServiceBox pType="call" />
        </div>

        <div className="min-h-72 sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:mx-0 lg:w-full">
          <ServiceBox pType="sms" />
        </div>

      </div>
    </section>
  );
}