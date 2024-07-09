'use client';
import * as React from "react";
import { useRouter } from 'next/navigation'; 

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => (
  <button
    className={`shrink-0 w-6 h-6 rounded-md border border-solid ${
      checked ? "bg-sky-600 border-sky-600" : "bg-white border-slate-300"
    }`}
    onClick={onChange}
  >
    {checked && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-4 h-4 mx-auto"
      >
        <path
          fillRule="evenodd"
          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </button>
);

interface StepItemProps {
  icon: string;
  text: string;
  checked: boolean;
  onChange: () => void;
}

const StepItem: React.FC<StepItemProps> = ({ icon, text, checked, onChange }) => (
  <div className="flex flex-col flex-1 px-4 py-5 bg-white rounded-2xl shadow-sm">
    <div className="flex gap-5 justify-between items-start">
      <img loading="lazy" src={icon} className="shrink-0 mt-2 aspect-square w-[45px]" />
      <Checkbox checked={checked} onChange={onChange} />
    </div>
    <div className="mt-7 text-base text-slate-800">{text}</div>
  </div>
);

const MyComponent: React.FC = () => {
  const [steps, setSteps] = React.useState([
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/26f7e2d1f3b71fb1d7a9970c085cf02927a54b97508934c5a8a6413f1922cb9c?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Where to park", checked: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea44a01d3f6d52d1d53f422323d7b4073d7e6ad9f7c340fa9032963c2868bf?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Find the rental", checked: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a19f42d1ce192b94a70b3965f37195cb7658c298e695ce85eebf3c3144aa685?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Collect the keys", checked: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90269bdcb679395c199cd88fa4f5f4b062fb3f0344a5ccb8842ca14a83d3da46?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Access accommodation", checked: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d46614afe0b177b89955d66acee8fa4c2241e817c8762c31583d050f53f7886?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Enter the accommodation", checked: false },
  ]);

  const [otherCount, setOtherCount] = React.useState(2);

    
  const router = useRouter();  // Initialize the useRouter hook

  const navigateToNextPage= () => {
    router.push('/house_manual/checkin_automation/handover_keys/handover2');  // Programmatically navigate to /my_team
  };

  const handleStepChange = (index: number) => {
    setSteps((prevSteps) =>
      prevSteps.map((step, i) =>
        i === index ? { ...step, checked: !step.checked } : step
      )
    );
  };

  const handleContinue = () => {
    navigateToNextPage()
  };

  const handleAddOther = () => {
    setOtherCount((prev) => prev + 1);
  };

  const handleRemoveOther = () => {
    if (otherCount > 0) {
      setOtherCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col self-stretch pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/60a35504b43724f14b33ca34538fd8d6d75c97a1b914d7a7f4c79e9fe196d5be?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Checkin-Checkout Automation
          </div>
          <div className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">3</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Handing over the keys
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5 w-full max-w-[392px]">
        {steps.map((step, index) => (
          <StepItem
            key={index}
            icon={step.icon}
            text={step.text}
            checked={step.checked}
            onChange={() => handleStepChange(index)}
          />
        ))}
        <div className="flex flex-col flex-1 px-4 py-6 bg-white rounded-2xl shadow-sm">
          <div className="flex gap-5 justify-between items-start text-sm text-center text-sky-600 whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9daf18436e20c20bca326f309e93a674040cf807220000fedf8c2320208f04?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[45px]" />
            <div>{otherCount}</div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="my-auto text-base text-slate-800">Others</div>
            <div className="flex flex-1 gap-3">
              <button onClick={handleRemoveOther}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e5fa62392d25c5fcd97e8a5142a6f7152a36e2a70a5bdb0ff083a18cfd5848?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-6 aspect-square" />
              </button>
              <button onClick={handleAddOther}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8398f5ddd19a30fdd81186445cbdda5a4a2c9700c35d44084857edf324d4b0?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-6 aspect-square" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleContinue}
        className="justify-center px-8 py-4 mt-56 text-base text-center text-white whitespace-nowrap bg-sky-600 rounded-[30px]"
      >
        Continue
      </button>
    </div>
  );
};

export default MyComponent;