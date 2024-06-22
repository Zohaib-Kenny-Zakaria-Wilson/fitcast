import React from "react";
import { WthrLogo } from "./WthrLogo.jsx";
import CurrentWthrContent from "./CurrentWthrContent.jsx";
import ForecastWthrContent from "./ForecastWthrContent.jsx";

export default function WthrContent({
  loading,
  refreshData,
  globalCurrentData,
  globalForecastData,
}) {
  return (
    <div className="min-h-full border-b-4 rounded-md max-h-fit bg-foreground dark:bg-dark-foreground min-w-fit border-component-border dark:border-dark-component-border">
      <div className="flex flex-col items-center justify-start w-full h-full gap-8 overflow-auto lg:p-8 xl:gap-12 2xl:gap-16 xl:p-10 2xl:p-12 scrollbar-hide">
        <CurrentWthrContent
          loading={loading}
          globalCurrentData={globalCurrentData}
        />
        <ForecastWthrContent
          loading={loading}
          globalForecastData={globalForecastData}
        />
        <WthrLogo onClick={refreshData} />
      </div>
    </div>
  );
}
