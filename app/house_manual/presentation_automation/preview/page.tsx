'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(3);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const router = useRouter();

  const navigateToExample = () => {
    router.push('/house_manual/presentation_automation/preview_example');
  };

  const navigateToGeneralInfo = () => {
    router.push('/house_manual/presentation_automation/general_info');
  };

  const handleContinue = () => {
    navigateToGeneralInfo()
  };


  const handlePreviewClick = () => {
    navigateToExample()
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
              alt="Signal icon"
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt="Wifi icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt="Bluetooth icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.92] w-[27px]"
              alt="Battery icon"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Presentation Automation
          </div>
          <div className="self-start mt-6 text-sm text-right text-gray-100">
            Step <span className="text-xl">{currentStep}</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Digital Presentation
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="mt-6 text-base font-bold leading-6 text-center text-slate-800">
        Before continuing, take a look to see what the digital housing
        presentation looks like for your accommodation on appname
      </div>
      <button
        onClick={handlePreviewClick}
        className="flex flex-col px-5 py-5 mt-6 max-w-full text-base leading-6 text-center bg-white rounded-2xl border-2 border-sky-600 border-solid shadow-sm text-slate-800 w-[244px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2244888b3d9b3efd82fe53be44e0b4f230c247d92cb02311236a16f1df1dca9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
          className="self-center aspect-square w-[50px]"
          alt="Preview icon"
        />
        <div className="mt-5">Preview the accommodation presentation</div>
      </button>
      <div className="flex gap-4 mt-96 text-base text-center text-white whitespace-nowrap">
        <button
          onClick={handleBack}
          className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MyComponent;