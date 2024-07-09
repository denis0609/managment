'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cleaningTime, setCleaningTime] = useState("01h 00");
  const [hasContract, setHasContract] = useState(true);
  const [addCleaningInstructions, setAddCleaningInstructions] = useState(true);
  const [addInterviewToolsInstructions, setAddInterviewToolsInstructions] = useState(true);
  const [addLaundryInstructions, setAddLaundryInstructions] = useState(true);
  const router = useRouter();

  const toggleOption = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  const handleContinue = () => {
    navigateToHousekeeper()
  };

  const handleBack = () => {
    //
  };

  const navigateToHousekeeper = () => {
    router.push('/house_manual/housekeeping_automation/housekeeper');
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
          <div className="text-xl font-bold text-white capitalize">Automate Housekeeping</div>
          <div className="self-start mt-5 text-sm text-right text-gray-100">
            Step <span className="text-xl">{currentStep}</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">General Information</div>
          <div className="flex gap-2 mt-2.5">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`flex-1 shrink-0 h-1 rounded-md ${
                  index < currentStep ? 'bg-gray-100' : 'bg-white bg-opacity-40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full text-base">
        <div className="text-lg font-bold text-sky-600">Household Information</div>
        <div className="mt-6 text-sm text-slate-800">
          How long does a cleaning service take in this accommodation?
        </div>
        <button
          className="flex gap-5 justify-between px-5 py-4 mt-3.5 bg-white rounded-xl border border-solid border-slate-300 text-slate-800"
          onClick={() => {
            const newTime = prompt("Enter new cleaning time (e.g. 01h 30)");
            if (newTime) setCleaningTime(newTime);
          }}
        >
          <div className="my-auto">{cleaningTime}</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16066b2a1f891cfcc2b7e74938943439304924a2d0b580163e1afdf613da8cfa?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-4 aspect-square" />
        </button>
        <div className="mt-5 text-slate-800">have you already defined a contract with your cleaning lady?</div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button
            className={`flex gap-2 ${hasContract ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setHasContract(true)}
          >
            {hasContract ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">Yes</div>
          </button>
          <button
            className={`flex gap-2 ${!hasContract ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setHasContract(false)}
          >
            {!hasContract ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-7 text-lg font-bold text-sky-600">Household Organization</div>
        <div className="mt-4 text-slate-800">
          Would you like to add instruction to explain where to find cleaning products?
        </div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button
            className={`flex gap-2 ${addCleaningInstructions ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => toggleOption(setAddCleaningInstructions)}
          >
            {addCleaningInstructions ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">Yes</div>
          </button>
          <button
            className={`flex gap-2 ${!addCleaningInstructions ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => toggleOption(setAddCleaningInstructions)}
          >
            {!addCleaningInstructions ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-5 text-slate-800">
          Would you like to add instruction to explain where to find the interview tools?
        </div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button
            className={`flex gap-2 ${addInterviewToolsInstructions ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => toggleOption(setAddInterviewToolsInstructions)}
          >
            {addInterviewToolsInstructions ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">Yes</div>
          </button>
          <button
            className={`flex gap-2 ${!addInterviewToolsInstructions ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => toggleOption(setAddInterviewToolsInstructions)}
          >
            {!addInterviewToolsInstructions ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-5 text-slate-800">
          Would you like to add instruction to explain where to find clean laundry and where to drop off dirty laundry
          in the accommodation?
        </div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button
            className={`flex gap-2 ${addLaundryInstructions ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => toggleOption(setAddLaundryInstructions)}
          >
            {addLaundryInstructions ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">Yes</div>
          </button>
          <button
            className={`flex gap-2 ${!addLaundryInstructions ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => toggleOption(setAddLaundryInstructions)}
          >
            {!addLaundryInstructions ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">No</div>
          </button>
        </div>
      </div>
      <div className="flex gap-5 mt-6 justify-center">
        
          <button
            onClick={handleBack}
            className="justify-center px-8 py-4 mt-4 text-center text-white whitespace-nowrap bg-gray-600 rounded-[30px] hover:bg-gray-700 transition-colors"
          >
            Back
          </button>
        

          <button
            onClick={handleContinue}
            className="justify-center px-8 py-4 mt-4 text-center text-white whitespace-nowrap bg-sky-600 rounded-[30px] hover:bg-sky-700 transition-colors"
          >
            Continue
          </button>
        
      </div>
    </div>
  );
};

export default MyComponent;
