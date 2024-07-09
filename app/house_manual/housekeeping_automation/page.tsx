'use client';
import * as React from "react";

type ConfigurationItemProps = {
  title: string;
  status: string;
  iconSrc: string;
  onClick: () => void;
};

const ConfigurationItem: React.FC<ConfigurationItemProps> = ({ title, status, iconSrc, onClick }) => (
  <button
    onClick={onClick}
    className="flex gap-5 justify-between px-4 py-5 mt-5 w-full text-base bg-white rounded-2xl shadow-sm max-w-[392px]"
  >
    <div className="flex flex-col items-start">
      <h3 className="font-bold text-slate-800">{title}</h3>
      <p className="mt-4 text-sky-600">{status}</p>
    </div>
    <img loading="lazy" src={iconSrc} alt="" className="shrink-0 my-auto w-8 aspect-square" />
  </button>
);

const MyComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  const configItems: ConfigurationItemProps[] = [
    {
      title: "Check in/out Automation",
      status: "To modify",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/563e32ae0285eb991112f4b6da960cd4268bb9cecdba55e5607fa74faca29fc0?apiKey=d756b2110af54b2291a49c0e6a10f702&",
      onClick: () => setCurrentStep(2),
    },
    {
      title: "Presentation Automation",
      status: "To modify",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/01e00c64aae0589acee6afcffbcc81c685fc7e9f1751552d176cd53ed80851b0?apiKey=d756b2110af54b2291a49c0e6a10f702&",
      onClick: () => setCurrentStep(3),
    },
    {
      title: "Automate Housekeeping",
      status: "To modify",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ab9904e18336cbf679177a26a9606e25b217144dde54c6dcf21643ce4ff3444?apiKey=d756b2110af54b2291a49c0e6a10f702&",
      onClick: () => setCurrentStep(4),
    },
  ];

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Configuration complete!");
    }
  };

  return (
    <main className="flex flex-col items-center pb-20 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col self-stretch pb-4 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <nav className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.92] w-[27px]" />
          </nav>
        </div>
        <h1 className="self-start mt-4 ml-5 text-xl font-bold capitalize text-slate-800">
          House Manual Configuration
        </h1>
      </header>
      {configItems.map((item, index) => (
        <ConfigurationItem key={index} {...item} />
      ))}
      <section className="flex flex-col items-start py-5 pr-20 pl-4 mt-5 w-full text-base bg-white rounded-2xl shadow-sm max-w-[392px] text-slate-800">
        <p>Step {currentStep}</p>
        <h2 className="mt-3.5 font-bold">Sync Calendar</h2>
        <button
          onClick={handleContinue}
          className="justify-center px-8 py-4 mt-4 text-center text-white whitespace-nowrap bg-sky-600 rounded-[30px]"
        >
          Continue
        </button>
      </section>
    </main>
  );
};

export default MyComponent;