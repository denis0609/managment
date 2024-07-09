'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

interface MyComponentProps {
  onBack: () => void;
  onContinue: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ onBack, onContinue }) => {
  const [housekeeperName, setHousekeeperName] = React.useState("");
  const router = useRouter();

  const navigateToDefineOrderCleaning = () => {
    router.push('/house_manual/housekeeping_automation/rooms_to_clean');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHousekeeperName(event.target.value);
  };

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 w-3.5 aspect-square"
              alt="Icon"
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt="Icon 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt="Icon 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.92] w-[27px]"
              alt="Icon 3"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Presentation Automation
          </div>
          <div className="self-start mt-6 text-sm text-right text-gray-100">
            Step <span className="text-xl">2</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Housekeeper
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full text-base">
        <div className="text-lg font-bold leading-6 text-sky-600">
          Are you keeping some of your housekeeping for this rental?
        </div>
        <div className="mt-6 text-sm text-slate-800">Housekeeper name</div>
        <input
          type="text"
          value={housekeeperName}
          onChange={handleNameChange}
          placeholder="Enter agent name"
          className="justify-center items-start px-5 py-5 mt-2.5 text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
        />
        <div className="flex gap-4 self-center text-center text-white whitespace-nowrap mt-[515px]">
          <button
            onClick={onBack}
            className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]"
          >
            Back
          </button>
          <button
            onClick={navigateToDefineOrderCleaning}
            className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
