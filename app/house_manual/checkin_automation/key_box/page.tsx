'use client';
import * as React from "react";
import { useRouter } from 'next/navigation'; 

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [checkInTime, setCheckInTime] = React.useState("15");
  const [checkOutTime, setCheckOutTime] = React.useState("10");
  const [keyBoxPassword, setKeyBoxPassword] = React.useState("123456xyz");
  const [hasDigitalCode, setHasDigitalCode] = React.useState(true);
  const [digicodePassword, setDigicodePassword] = React.useState("123456xyz");
  const [hasAlarm, setHasAlarm] = React.useState(true);
  const [alarmPassword, setAlarmPassword] = React.useState("123456xyz");

  const router = useRouter();  // Initialize the useRouter hook

  const navigateToCheckinAutomation = () => {
    router.push('/house_manual/checkin_automation/handover_keys');  // Programmatically navigate to /my_team
  };

  const handleBack = () => {
    // Handle back action
  };

  const handleContinue = () => {
    navigateToCheckinAutomation()
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
          <div className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">2</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            General Information
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-lg font-bold text-sky-600">
          Key Box - key management
        </div>
        <div className="flex gap-5 mt-5 text-slate-800">
          <div className="flex flex-col flex-1">
            <div className="text-sm">Check-in Time</div>
            <button
              className="flex gap-5 justify-between px-5 py-4 mt-3.5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300"
              onClick={() => {
                // Handle check-in time selection
              }}
            >
              <div className="my-auto">{checkInTime}</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57aee51b7052485e64be377ca90f2def7a6e0ff7959b8853d4b9f27057d9c878?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-4 aspect-square" />
            </button>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-sm">Check-out Time</div>
            <button
              className="flex gap-5 justify-between px-5 py-4 mt-3.5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300"
              onClick={() => {
                // Handle check-out time selection
              }}
            >
              <div className="my-auto">{checkOutTime}</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57aee51b7052485e64be377ca90f2def7a6e0ff7959b8853d4b9f27057d9c878?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-4 aspect-square" />
            </button>
          </div>
        </div>
        <div className="mt-6 text-sm text-slate-800">Key box password</div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-base text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
          <input
            type="text"
            value={keyBoxPassword}
            onChange={(e) => setKeyBoxPassword(e.target.value)}
            className="w-full bg-transparent outline-none"
          />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdaf9362d251fadfe3bc4620d7b9c557f4a2a60b591c7e8fa404bfc55a7f2fb?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 self-start w-4 aspect-square" />
        </div>
        <div className="mt-6 text-base text-slate-800">
          Is there a digital code at entrance to your rental?
        </div>
        <div className="flex gap-4 self-start mt-3 text-base whitespace-nowrap">
          <button
            className={`flex gap-2 ${hasDigitalCode ? 'text-sky-600' : 'text-zinc-500'}`}
            onClick={() => setHasDigitalCode(true)}
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/767e43a1930a1f4c0e016cbba0799db2013d84b79e5e6aa50e69e5022a80b65c?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-square w-[26px]" />
            <div className="my-auto">yes</div>
          </button>
          <button
            className={`flex gap-2 ${!hasDigitalCode ? 'text-sky-600' : 'text-zinc-500'}`}
            onClick={() => setHasDigitalCode(false)}
          >
            <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            <div className="my-auto">No</div>
          </button>
        </div>
        {hasDigitalCode && (
          <>
            <div className="mt-6 text-sm text-slate-800">Digicode password</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-base text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
              <input
                type="text"
                value={digicodePassword}
                onChange={(e) => setDigicodePassword(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdaf9362d251fadfe3bc4620d7b9c557f4a2a60b591c7e8fa404bfc55a7f2fb?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 self-start w-4 aspect-square" />
            </div>
          </>
        )}
        <div className="mt-6 text-base text-slate-800">
          Is there an alarm in your rental?
        </div>
        <div className="flex gap-4 self-start mt-3 text-base whitespace-nowrap">
          <button
            className={`flex gap-2 ${hasAlarm ? 'text-sky-600' : 'text-zinc-500'}`}
            onClick={() => setHasAlarm(true)}
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/767e43a1930a1f4c0e016cbba0799db2013d84b79e5e6aa50e69e5022a80b65c?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-square w-[26px]" />
            <div className="my-auto">yes</div>
          </button>
          <button
            className={`flex gap-2 ${!hasAlarm ? 'text-sky-600' : 'text-zinc-500'}`}
            onClick={() => setHasAlarm(false)}
          >
            <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            <div className="my-auto">No</div>
          </button>
        </div>
        {hasAlarm && (
          <>
            <div className="mt-6 text-sm text-slate-800">Alarm password</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-base text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
              <input
                type="text"
                value={alarmPassword}
                onChange={(e) => setAlarmPassword(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdaf9362d251fadfe3bc4620d7b9c557f4a2a60b591c7e8fa404bfc55a7f2fb?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 self-start w-4 aspect-square" />
            </div>
          </>
        )}
        <div className="flex gap-4 self-center mt-24 text-base text-center text-white whitespace-nowrap">
          <button
            className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="justify-center px-8 py-4 bg-sky-600 bg-opacity-50 rounded-[30px]"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;