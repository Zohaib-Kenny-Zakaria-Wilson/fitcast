import React from "react";

function WeatherComponent() {
  return (
    <div className="bg-foreground w-fit h-full rounded-xl border-b-4 border-component-border">
      <div className="w-full h-full py-16 px-6 2xl:px-12 flex flex-col justify-between">
        <div className="w-full flex flex-col gap-6 items-center">
          <p className="text-center font-medium text-3xl text-primary">
            Grand Island
          </p>
          <img
            className="size-48 -my-5"
            src={`${process.env.PUBLIC_URL}/assets/clear-day.svg`}
            alt="Clear Day"
          />
          <div className="flex flex-col gap-2">
            <p className="text-center font-bold text-5xl text-primary">75°F</p>
            <p className="text-center text-base text-primary">Sunny</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="w-fit px-4 py-2 flex justify-center items-center gap-2 rounded-lg bg-background text-primary">
            <img
              className="size-8"
              src={`${process.env.PUBLIC_URL}/assets/wind.svg`}
              alt=""
            />
            <p className="text-primary">48 mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
