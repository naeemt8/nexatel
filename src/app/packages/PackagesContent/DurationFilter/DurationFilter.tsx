"use client";

import { useState } from "react";

export default function DurationFilter({
  onDurationChange,
}: {
  onDurationChange: (duration: number) => void;
}) {
  const durations = [
    { label: "۱ روزه", value: 1 },
    { label: "۳ روزه", value: 3 },
    { label: "۷ روزه", value: 7 },
    { label: "۱۵ روزه", value: 15 },
    { label: "۱ ماهه", value: 30 },
    { label: "۲ ماهه", value: 60 },
    { label: "۳ ماهه", value: 90 },
  ];

    const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-4 grid w-[95%] grid-cols-2 gap-2 rounded-2xl border border-border bg-bg2 p-2 shadow-xl shadow-shadow sm:grid-cols-3 md:grid-cols-4 lg:w-[90%] lg:grid-cols-7">
      {durations.map((duration) => (
        <button
          key={duration.value}
          type="button"
          onClick={() => {
            setSelected(duration.value);
            onDurationChange(duration.value);
          }}
          className={`rounded-xl px-3 py-3 text-sm font-medium text-white transition duration-200 sm:text-base ${
            selected === duration.value
              ? "bg-primary text-bg1"
              : "hover:bg-primary"
          }`}
        >
          {duration.label}
        </button>
      ))}
    </div>
  );
}