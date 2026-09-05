"use client";
import { useState } from "react";

import { packageData } from "@/data/packages";
import DurationFilter from "./DurationFilter/DurationFilter";
import Package from "@/app/components/layout/Package/Package";

export default function PackagesContent({
  packages,
}: {
  packages: typeof packageData;
}) {

    const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
    
    const filteredPackages = packages.filter(
        (item) => selectedDuration === null || item.duration === selectedDuration
        );

    return(
        <>
            <div className="mt-24">
                <DurationFilter onDurationChange={setSelectedDuration} />

                <div className="mx-auto mt-12 grid w-[95%] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:w-[90%] lg:grid-cols-4">
                    {filteredPackages.map((pkg, index) => (
                        <div key={index} className="min-w-0">
                        <Package obj={pkg} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}