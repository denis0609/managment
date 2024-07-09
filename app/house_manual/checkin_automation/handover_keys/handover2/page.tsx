'use client';
import * as React from "react";
import { useRouter } from 'next/navigation'; 

interface CheckInStep {
  title: string;
  order: number;
  canDelete: boolean;
}

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [steps, setSteps] = React.useState<CheckInStep[]>([
    { title: "Find the rental", order: 1, canDelete: false },
    { title: "Collect the keys", order: 2, canDelete: false },
    { title: "Access accommodation", order: 2, canDelete: true },
    { title: "Enter the accommodation", order: 2, canDelete: false },
    { title: "Where to park?", order: 2, canDelete: true },
  ]);

  const handleRename = (index: number) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      const newSteps = [...steps];
      newSteps[index].title = newTitle;
      setSteps(newSteps);
    }
  };

  const handleDelete = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const router = useRouter();  // Initialize the useRouter hook

  const navigateToNextPage= () => {
    router.push('/house_manual/checkin_automation/handover_keys/handover3');  // Programmatically navigate to /my_team
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  const handleContinue = () => {
   navigateToNextPage()
  };

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
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
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-base font-bold text-sky-600">
          Tidy up the check-in steps for a hassle-free arrival
        </div>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col p-4 mt-4 w-full bg-white rounded-2xl shadow-sm">
            <div className="text-sm font-bold text-slate-800">{step.title}</div>
            <div className="flex gap-4 justify-between mt-3 w-full text-base">
              <div className={`text-${index === 1 ? 'gray-400' : 'slate-800'}`}>
                Order of appearance: <span className={`text-${index === 1 ? 'gray-400' : 'slate-800'}`}>{step.order}</span>
              </div>
              <div className="flex gap-4 text-sky-600 whitespace-nowrap">
                <button onClick={() => handleRename(index)} className="flex gap-1.5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1553509672c3403dfc653c3f877824334fe2c9bc8764a72b36ac6d3d2c32d4f?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[18px]" />
                  <div className="my-auto">Rename</div>
                </button>
                {step.canDelete && (
                  <button onClick={() => handleDelete(index)}>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e88c492404003ff1f1e3715178362deec6cf215257d32c436020d9e68fa3c8?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[18px]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-4 self-center mt-44 text-base text-center text-white whitespace-nowrap">
          <button onClick={handleBack} className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]">
            Back
          </button>
          <button onClick={handleContinue} className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;