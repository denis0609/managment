'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

interface CalendarOption {
  name: string;
  icon: string;
}

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [selectedCalendar, setSelectedCalendar] = React.useState<string | null>(null);

  const router = useRouter();

  const calendarOptions: CalendarOption[] = [
    { name: "Airbnb", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/98fc80d278092cc95c3fe30f6aa53bd42d1de7f111c647e5bd81da37a7afb53b?apiKey=d756b2110af54b2291a49c0e6a10f702&" },
    { name: "Beds24", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d86b1e7ff65966b94fea8871c4262725f3dc85c50c21f9735393ed3dc7c0e35?apiKey=d756b2110af54b2291a49c0e6a10f702&" },
    { name: "Channel Manager", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9370344c26cc5bda9ed622fa10b3eb8379f17354ec65e04c4f6295e456bda057?apiKey=d756b2110af54b2291a49c0e6a10f702&" },
  ];

  const handleCalendarSelect = (calendarName: string) => {
    setSelectedCalendar(calendarName);
  };

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    if (selectedCalendar) {
      router.push(`/house_manual/calendar_automation/export_calendar/airbnb`);  // Update the path to the next step
    } else {
      console.log("Please select a calendar option");
    }
  };

  return (
    <div className="flex flex-col pb-20 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">Sync Calendar</div>
          <div className="self-start mt-5 text-sm text-gray-100">
            Step <span className="text-xl">1</span>/3
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">Export my calendar</div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-lg font-bold text-sky-600">Which calendar do you want to export to the app</div>
        <div className="flex gap-5 mt-4">
          {calendarOptions.map((option) => (
            <button
              key={option.name}
              className="flex flex-col flex-1 px-4 pt-4 pb-6 bg-white rounded-2xl shadow-sm"
              onClick={() => handleCalendarSelect(option.name)}
            >
              <div className="flex gap-5 justify-between items-start">
                <img loading="lazy" src={option.icon} className="shrink-0 mt-2 aspect-square w-[50px]" />
                <div
                  className={`shrink-0 w-6 h-6 rounded-md border border-solid ${
                    selectedCalendar === option.name
                      ? "bg-sky-600 border-sky-600"
                      : "bg-white border-slate-300"
                  }`}
                />
              </div>
              <div className="mt-5 text-base text-slate-800">{option.name}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4 self-center mt-8 text-base text-center text-white whitespace-nowrap">
        <button onClick={handleBack} className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]">
          Back
        </button>
        <button onClick={handleContinue} className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
