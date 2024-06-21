import React from "react";
import { Logo } from "../misc/Logo.jsx";
import CurrentWthrContent from "./CurrentWthrContent.jsx";
import ForecastWthrContent from "./ForecastWthrContent.jsx";

export default function WthrContent({
  loading,
  refreshData,
  globalCurrentData,
  globalForecastData,
}) {
  return (
    <div className="grid h-full border-b-4 rounded-md bg-foreground dark:bg-dark-foreground min-w-fit border-component-border dark:border-dark-component-border">
      <div className="flex flex-col items-center justify-between w-full h-full px-6 py-16 2xl:px-12">
        <CurrentWthrContent
          loading={loading}
          globalCurrentData={globalCurrentData}
        />
        <ForecastWthrContent
          loading={loading}
          globalForecastData={globalForecastData}
        />
        <Logo onClick={refreshData} />
      </div>
    </div>
  );
}
