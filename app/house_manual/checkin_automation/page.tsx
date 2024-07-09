'use client';
import * as React from "react";
import { useRouter } from 'next/navigation'; 

interface KeyHandoverOption {
  icon: string;
  label: string;
}

const keyHandoverOptions: KeyHandoverOption[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c5ff9ce8f4301abdfbcf04416a83a1e1e1c2f1478af575104bc9cd782b94ae5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&", label: "Electronic lock" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e41669de328f0163c2444dec5aa6e71a1cbd4eb62de93a377241eaa14e8dd64?apiKey=e6ca5815e046456fa7dc3340ed86c31e&", label: "Key Box" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bd360730b3f4c48e329890ab5c2f5970e2d26eb51af95e08735db0846742422?apiKey=e6ca5815e046456fa7dc3340ed86c31e&", label: "Local Commerce" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/978819ac6100a2979b58926090f17331beca5b9e39830a7d0d716fe8df432d5c?apiKey=e6ca5815e046456fa7dc3340ed86c31e&", label: "Home Agent" },
];

function MyComponent(): React.ReactElement {
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const router = useRouter();  // Initialize the useRouter hook

  const navigateToCheckinAgent = () => {
    router.push('/house_manual/checkin_automation/agent');  // Programmatically navigate to /my_team
  };
  const navigateToCheckinElecLock = () => {
    router.push('/house_manual/checkin_automation/electronic_lock');  // Programmatically navigate to /my_team
  };
  const navigateToCheckinKeybox = () => {
    router.push('/house_manual/checkin_automation/key_box');  // Programmatically navigate to /my_team
  };
  const navigateToCheckinLocalCommerce = () => {
    router.push('/house_manual/checkin_automation/local_commerce');  // Programmatically navigate to /my_team
  };

  const handleContinue = () => {
    if (selectedOption !== null) {
      if(selectedOption==0) {
        navigateToCheckinElecLock()
      }
      else if(selectedOption==1) {navigateToCheckinKeybox()}
      else if(selectedOption==2) {navigateToCheckinLocalCommerce()}
      else {navigateToCheckinAgent()}


      //console.log(`Selected option: ${keyHandoverOptions[selectedOption].label}`);
    }
  };

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Checkin-Checkout Automation
          </div>
          <div className="self-start mt-6 text-sm text-right text-gray-100">
            Step <span className="text-xl">1</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Check-in mode
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-lg font-bold text-slate-800">
          How do you hand over the keys?
        </div>
        <div className="flex flex-wrap gap-5 mt-4">
          {keyHandoverOptions.map((option, index) => (
            <button
              key={index}
              className="flex flex-col flex-1 px-4 pt-4 pb-6 bg-white rounded-2xl shadow-sm min-w-[45%]"
              onClick={() => handleOptionSelect(index)}
            >
              <div className="flex gap-5 justify-between items-start">
                <img loading="lazy" src={option.icon} className="shrink-0 mt-2 aspect-square w-[50px]" />
                <div className={`shrink-0 w-6 h-6 rounded-md border border-solid ${selectedOption === index ? 'bg-sky-600 border-sky-600' : 'bg-white border-slate-300'}`} />
              </div>
              <div className="mt-5 text-base text-slate-800">{option.label}</div>
            </button>
          ))}
        </div>
        <button
          className={`justify-center self-center px-8 py-4 mt-80 text-base text-center text-white whitespace-nowrap rounded-[30px] ${selectedOption !== null ? 'bg-sky-600' : 'bg-sky-600 bg-opacity-50'}`}
          onClick={handleContinue}
          disabled={selectedOption === null}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default MyComponent;