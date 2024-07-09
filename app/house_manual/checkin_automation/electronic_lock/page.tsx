'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

type TimeDisplayProps = {
  time: string;
  iconSrc: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, iconSrc }) => (
  <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
    <div className="justify-center p-px">{time}</div>
    <img loading="lazy" src={iconSrc} alt="" className="shrink-0 w-3.5 aspect-square" />
  </div>
);

type StatusIconProps = {
  src: string;
  alt: string;
};

const StatusIcon: React.FC<StatusIconProps> = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-[1.28] w-[18px]" />
);

type ProgressBarProps = {
  isActive: boolean;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ isActive }) => (
  <div
    className={`flex-1 shrink-0 h-1 rounded-md ${
      isActive ? 'bg-white' : 'bg-white bg-opacity-40'
    }`}
  />
);

type TimeInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange }) => (
  <div className="flex flex-1 gap-5 justify-between px-5 py-4 bg-white rounded-xl border border-solid border-slate-300">
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-none outline-none"
    />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57aee51b7052485e64be377ca90f2def7a6e0ff7959b8853d4b9f27057d9c878?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-4 aspect-square" />
  </div>
);

type RadioButtonProps = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, isChecked, onChange }) => (
  <button
    onClick={onChange}
    className={`flex gap-2 ${isChecked ? 'text-sky-600' : 'text-zinc-500'}`}
  >
    {isChecked ? (
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/767e43a1930a1f4c0e016cbba0799db2013d84b79e5e6aa50e69e5022a80b65c?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-square w-[26px]" />
    ) : (
      <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
    )}
    <div className="my-auto">{label}</div>
  </button>
);

type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, variant, onClick }) => (
  <button
    onClick={onClick}
    className={`justify-center px-8 py-4 rounded-[30px] ${
      variant === 'primary' ? 'bg-sky-600 bg-opacity-50' : 'bg-slate-800'
    } text-white`}
  >
    {label}
  </button>
);

const MyComponent: React.FC = () => {
  const [checkInTime, setCheckInTime] = useState('15');
  const [checkOutTime, setCheckOutTime] = useState('10');
  const [lockPassword, setLockPassword] = useState('123456xyz');
  const [hasDigitalCode, setHasDigitalCode] = useState(true);
  const [hasAlarm, setHasAlarm] = useState(true);

  const handleContinue = () => {
    navigateToCheckinAutomation()
  };

  const handleBack = () => {
    console.log('Back button clicked');
  };

  const router = useRouter();  // Initialize the useRouter hook

  const navigateToCheckinAutomation = () => {
    router.push('/house_manual/checkin_automation/handover_keys');  // Programmatically navigate to /my_team
  };


  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <TimeDisplay time="9:41" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" />
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <StatusIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Signal strength" />
            <StatusIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="WiFi status" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              alt="Battery status"
              className="shrink-0 aspect-[1.92] w-[27px]"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <h1 className="text-xl font-bold text-white capitalize">Checkin-Checkout Automation</h1>
          <div className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">2</span>/4
          </div>
          <h2 className="self-start mt-1.5 text-base font-bold text-white">General Information</h2>
          <div className="flex gap-2 mt-2.5">
            <ProgressBar isActive={true} />
            <ProgressBar isActive={true} />
            <ProgressBar isActive={false} />
            <ProgressBar isActive={false} />
          </div>
        </div>
      </header>
      <main className="flex flex-col px-5 mt-6 w-full text-base">
        <h3 className="text-lg font-bold text-sky-600">Electronic lock - key management</h3>
        <div className="flex gap-5 mt-5 text-sm text-slate-800">
          <div>Check-in Time</div>
          <div className="flex-auto">Check-out Time</div>
        </div>
        <div className="flex gap-5 mt-3.5 whitespace-nowrap text-slate-800">
          <TimeInput value={checkInTime} onChange={setCheckInTime} />
          <TimeInput value={checkOutTime} onChange={setCheckOutTime} />
        </div>
        <label htmlFor="lockPassword" className="mt-6 text-sm text-slate-800">
          Electronic lock password
        </label>
        <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
          <input
            type="password"
            id="lockPassword"
            value={lockPassword}
            onChange={(e) => setLockPassword(e.target.value)}
            className="bg-transparent border-none outline-none w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdaf9362d251fadfe3bc4620d7b9c557f4a2a60b591c7e8fa404bfc55a7f2fb?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
            alt=""
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
        <fieldset className="mt-6 border-none p-0">
          <legend className="text-slate-800">
            Is there a digital code at entrance to your rental?
          </legend>
          <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
            <RadioButton
              label="yes"
              isChecked={hasDigitalCode}
              onChange={() => setHasDigitalCode(true)}
            />
            <RadioButton
              label="No"
              isChecked={!hasDigitalCode}
              onChange={() => setHasDigitalCode(false)}
            />
          </div>
        </fieldset>
        <fieldset className="mt-6 border-none p-0">
          <legend className="text-slate-800">Is there an alarm in your rental?</legend>
          <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
            <RadioButton label="yes" isChecked={hasAlarm} onChange={() => setHasAlarm(true)} />
            <RadioButton label="No" isChecked={!hasAlarm} onChange={() => setHasAlarm(false)} />
          </div>
        </fieldset>
        <div className="flex gap-4 self-center mt-72 text-center text-white whitespace-nowrap">
          <Button label="Back" variant="secondary" onClick={handleBack} />
          <Button label="Continue" variant="primary" onClick={handleContinue} />
        </div>
      </main>
    </div>
  );
};

export default MyComponent;