'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type WifiOptionProps = {
  label: string;
  isSelected: boolean;
  icon: string;
  onClick: () => void;
};

const WifiOption: React.FC<WifiOptionProps> = ({ label, isSelected, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`flex gap-2 ${isSelected ? 'text-sky-600' : 'text-zinc-500'}`}
  >
    {isSelected ? (
      <img src={icon} alt="" className="shrink-0 aspect-square w-[26px]" />
    ) : (
      <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
    )}
    <div className="my-auto">{label}</div>
  </button>
);

type InputFieldProps = {
  label: string;
  placeholder: string;
  icon: string;
  value: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, icon, value, onChange }) => (
  <>
    <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="mt-6 text-sm text-slate-800">
      {label}
    </label>
    <div className="flex gap-5 px-5 py-4 mt-2.5 text-gray-400 bg-white rounded-xl border border-solid border-slate-300">
      <input
        type="text"
        id={label.toLowerCase().replace(/\s/g, '-')}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-auto bg-transparent outline-none"
      />
      <img src={icon} alt="" className="shrink-0 w-4 aspect-square" />
    </div>
  </>
);

const MyComponent: React.FC = () => {
  const [hasWifi, setHasWifi] = useState(true);
  const [wifiName, setWifiName] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');

  const handleBack = () => {
    console.log('Back button clicked');
  };

  const router = useRouter();

  const navigateToGeneralAutomation = () => {
    router.push('/house_manual?step=3');
  };

  const handleContinue = () => {
    navigateToGeneralAutomation()
  };

  return (
    <main className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <h1 className="text-xl font-bold text-white capitalize">Presentation Automation</h1>
          <div className="self-start mt-6 text-sm text-right text-gray-100">
            Step <span className="text-xl">4</span>/4
          </div>
          <h2 className="self-start mt-1.5 text-base font-bold text-white">General Information</h2>
          <div className="flex gap-2 mt-2.5">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`flex-1 shrink-0 h-1 rounded-md ${index === 0 ? 'bg-gray-100' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
      </header>
      <section className="flex flex-col px-5 mt-6 w-full text-base">
        <h2 className="text-2xl font-bold text-sky-600">General information about your rental</h2>
        <p className="mt-5 text-slate-800">Do you have Wi-Fi in your rental?</p>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <WifiOption
            label="Yes"
            isSelected={hasWifi}
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            onClick={() => setHasWifi(true)}
          />
          <WifiOption
            label="No"
            isSelected={!hasWifi}
            icon=""
            onClick={() => setHasWifi(false)}
          />
        </div>
        {hasWifi && (
          <>
            <InputField
              label="Name of the Wi-Fi in your rental"
              placeholder="Enter Wi-Fi name"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e7dac42002eba13810c1e0ab364c73bfc18b8711060223a190863836fdeea27a?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              value={wifiName}
              onChange={setWifiName}
            />
            <InputField
              label="Wi-Fi password"
              placeholder="Enter Wi-Fi password"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/74af7eb3b5260d7d79af1c1422d4b3f7fb0172563fd0a375808f1496080fd3b2?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              value={wifiPassword}
              onChange={setWifiPassword}
            />
          </>
        )}
        <div className="flex gap-4 self-center mt-96 text-center text-white whitespace-nowrap">
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
      </section>
    </main>
  );
};

export default MyComponent;