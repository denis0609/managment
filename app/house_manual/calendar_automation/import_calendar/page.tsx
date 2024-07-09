'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

const MyComponent: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate to the previous page
  };

  const handleContinue = () => {
    router.push('/house_manual/calendar_automation/precheckin_message'); // Update the path to the next step
  };

  return (
    <div className="flex flex-col items-center pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col self-stretch pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.92] w-[27px]"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Sync Calendar
          </div>
          <div className="self-start mt-5 text-sm text-gray-100">
            Step <span className="text-xl">2</span>/3
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Import my calendar
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="mt-6 text-base leading-6 text-slate-800">
        You have successfully exported your Airbnb calendar to theapp. We will
        thus be able to collect information related to reservations and update
        it on the software.
      </div>
      <div className="mt-6 text-base font-bold leading-6 text-sky-600">
        There is one last step: Import your theapp calendar to Airbnb
      </div>
      <div className="flex overflow-hidden relative flex-col pr-4 pb-2.5 mt-5 w-full text-base aspect-[2.32] fill-white max-w-[392px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/668eebc5b6a3ebe9d6b72830f0d12aae103811c7baa4b9c58c2793f638caf3f1?apiKey=d756b2110af54b2291a49c0e6a10f702&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5">
          <div className="justify-center items-center px-6 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
            1
          </div>
          <div className="flex-auto my-auto text-slate-800">
            Click “Import Calendar”
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fdd4056884f5890349ba8e65be90b3d41ac56db0113dc0f1e3ae3652a233777?apiKey=d756b2110af54b2291a49c0e6a10f702&"
          className="mt-3.5 ml-4 w-full aspect-[3.7]"
        />
      </div>
      <div className="flex overflow-hidden relative flex-col pb-4 mt-5 w-full text-base aspect-[1.96] fill-white max-w-[392px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c4c4a5177365f1ea4ff9d10b490b1f4b6a261e9e4898d609b1e1a20de906b6a?apiKey=d756b2110af54b2291a49c0e6a10f702&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 items-start self-start px-5">
          <div className="justify-center items-center px-5 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
            2
          </div>
          <div className="flex-auto mt-5 text-slate-800">
            Fill in the fields with the following information: Then click on
            ”Import”
          </div>
        </div>
        <div className="flex relative flex-col px-4 mt-5 text-gray-400">
          <div>Calendar address (URL):</div>
          <div className="flex gap-2.5 mt-1.5 text-sky-600 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b002154e778b39f474094e1af2c07fc9f567d392cc2d011128cb1460072ce138?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 self-start aspect-square w-[18px]"
            />
            <div className="flex-auto">
              https://api.beds24.com/airbnb.com/ical.ics?roomid=495839
            </div>
          </div>
          <div className="mt-6">Name your calendar</div>
          <div className="flex gap-2.5 self-start mt-1.5 text-sky-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b002154e778b39f474094e1af2c07fc9f567d392cc2d011128cb1460072ce138?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="flex-auto">Theapp Calendar</div>
          </div>
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
}

export default MyComponent;
