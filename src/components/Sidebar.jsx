import React from 'react';

function WeatherComponent() {
    return (
        <div className="bg-foreground w-fit rounded-lg min-h-full">
            <div className='w-fit py-16 px-6 2xl:px-12 '>
                <div className="w-full flex flex-col gap-6 items-center">
                    <p className='text-center font-bold text-3xl  text-primary'>Grand Island</p>
                    <img className='size-48  -my-5 ' src={`${process.env.PUBLIC_URL}/assets/clear-day.svg`} alt="" />
                    <div className='flex flex-col gap-2'>
                    <p className='text-center font-bold text-5xl text-primary'>75°F</p>
                    <p className="text-center text-base  text-primary">Sunny</p>
                    </div>
                </div>
            </div>
          </div>
  );
}



export default WeatherComponent;