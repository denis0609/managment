'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; 

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [is24Hours, setIs24Hours] = useState(true);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [keyHandoverMethod, setKeyHandoverMethod] = useState("keybox");
  const [checkInTime, setCheckInTime] = useState("15");
  const [checkOutTime, setCheckOutTime] = useState("10");
  const [lateArrivalAddress, setLateArrivalAddress] = useState("");
  const [keyReturnLocation, setKeyReturnLocation] = useState("trade");
  const [hasDigitalCode, setHasDigitalCode] = useState(true);
  const [hasAlarm, setHasAlarm] = useState(true);

  const router = useRouter();  // Initialize the useRouter hook

  const navigateToCheckinAutomation = () => {
    router.push('/house_manual/checkin_automation/handover_keys');  // Programmatically navigate to /my_team
  };

  const handleContinue = () => {
    navigateToCheckinAutomation()
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };
  

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="http://b.io/ext_7-" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="http://b.io/ext_8-" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="http://b.io/ext_9-" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="http://b.io/ext_10-" className="shrink-0 aspect-[1.92] w-[27px]" />
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
          Information on local businesses handing over keys
        </div>
        <div className="mt-5 text-sm text-slate-800">Business Name</div>
        <input
          className="justify-center items-start p-5 mt-3.5 text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
          placeholder="Enter business name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <div className="mt-6 text-sm text-slate-800">Business Address</div>
        <input
          className="justify-center items-start p-5 mt-3.5 text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
          placeholder="Enter business address"
          value={businessAddress}
          onChange={(e) => setBusinessAddress(e.target.value)}
        />
        <div className="mt-6 text-sm text-slate-800">Phone Number</div>
        <input
          className="justify-center items-start p-5 mt-3.5 text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="mt-6 text-base text-slate-800">
          Is the business open 24 hours a day?
        </div>
        <div className="flex gap-4 self-start mt-3 text-base whitespace-nowrap">
          <button
            className={`flex gap-2 ${is24Hours ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setIs24Hours(true)}
          >
            <img
              loading="lazy"
              src={is24Hours ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">yes</div>
          </button>
          <button
            className={`flex gap-2 ${!is24Hours ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setIs24Hours(false)}
          >
            <img
              loading="lazy"
              src={!is24Hours ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-5 text-xs italic leading-4 text-gray-400">
          If the business is not open 24 hours a day, we will ask you to configure an emergency measure upon arrival and departure in order to respond to possible late arrivals or early departures of travelers
        </div>
        <div className="flex gap-5 mt-6">
          <div className="flex flex-col flex-1">
            <div className="text-sm text-slate-800">Opening time</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-base text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
              <input
                className="my-auto bg-transparent"
                placeholder="HH:MM"
                value={openingTime}
                onChange={(e) => setOpeningTime(e.target.value)}
              />
              <img loading="lazy" src="http://b.io/ext_12-" className="shrink-0 w-4 aspect-square" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-sm text-slate-800">Closing time</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-base text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
              <input
                className="my-auto bg-transparent"
                placeholder="HH:MM"
                value={closingTime}
                onChange={(e) => setClosingTime(e.target.value)}
              />
              <img loading="lazy" src="http://b.io/ext_12-" className="shrink-0 w-4 aspect-square" />
            </div>
          </div>
        </div>
        <div className="mt-6 text-base text-slate-800">
          In what form do you hand over the keys?
        </div>
        <div className="flex gap-4 mt-3 text-base">
          <button
            className={`flex gap-2 ${keyHandoverMethod === "keybox" ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setKeyHandoverMethod("keybox")}
          >
            <img
              loading="lazy"
              src={keyHandoverMethod === "keybox" ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">Key box</div>
          </button>
          <button
            className={`flex gap-2 ${keyHandoverMethod === "handdelivery" ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setKeyHandoverMethod("handdelivery")}
          >
            <img
              loading="lazy"
              src={keyHandoverMethod === "handdelivery" ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">Hand delivery</div>
          </button>
        </div>
        <div className="mt-5 text-xs italic leading-4 text-gray-400">
          If the business is not open 24 hours a day, we will ask you to configure an emergency measure upon arrival and departure in order to respond to possible late arrivals or early departures of travelers
        </div>
        <div className="mt-8 text-base font-bold text-sky-600">
          General information about arrivals and departures from the rental
        </div>
        <div className="flex gap-5 mt-6 text-slate-800">
          <div className="flex flex-col flex-1">
            <div className="text-sm">Check-in Time</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-3.5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
              <input
                className="my-auto bg-transparent"
                value={checkInTime}
                onChange={(e) => setCheckInTime(e.target.value)}
              />
              <img loading="lazy" src="http://b.io/ext_12-" className="shrink-0 w-4 aspect-square" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-sm">Check-out Time</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-3.5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
              <input
                className="my-auto bg-transparent"
                value={checkOutTime}
                onChange={(e) => setCheckOutTime(e.target.value)}
              />
              <img loading="lazy" src="http://b.io/ext_12-" className="shrink-0 w-4 aspect-square" />
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm text-slate-800">
          Address where to collect keys for late arrival
        </div>
        <input
          className="justify-center items-start p-5 mt-2.5 text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
          placeholder="Enter address"
          value={lateArrivalAddress}
          onChange={(e) => setLateArrivalAddress(e.target.value)}
        />
        <div className="mt-3 text-xs italic leading-4 text-gray-400">
          emergency measure
        </div>
        <div className="mt-6 text-sm text-slate-800">
          At the end of the stay, where should tenants leave the keys?
        </div>
        <div className="flex gap-4 self-start mt-3.5 text-base whitespace-nowrap">
          <button
            className={`flex gap-2 ${keyReturnLocation === "trade" ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setKeyReturnLocation("trade")}
          >
            <img
              loading="lazy"
              src={keyReturnLocation === "trade" ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">Trade</div>
          </button>
          <button
            className={`flex gap-2 ${keyReturnLocation === "location" ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setKeyReturnLocation("location")}
          >
            <img
              loading="lazy"
              src={keyReturnLocation === "location" ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">Location</div>
          </button>
        </div>
        <div className="mt-6 text-base text-slate-800">
          Is there a digital code at entrance to your rental?
        </div>
        <div className="flex gap-4 self-start mt-3 text-base whitespace-nowrap">
          <button
            className={`flex gap-2 ${hasDigitalCode ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setHasDigitalCode(true)}
          >
            <img
              loading="lazy"
              src={hasDigitalCode ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">yes</div>
          </button>
          <button
            className={`flex gap-2 ${!hasDigitalCode ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setHasDigitalCode(false)}
          >
            <img
              loading="lazy"
              src={!hasDigitalCode ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-6 text-base text-slate-800">
          Is there an alarm in your rental?
        </div>
        <div className="flex gap-4 self-start mt-3 text-base whitespace-nowrap">
          <button
            className={`flex gap-2 ${hasAlarm ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setHasAlarm(true)}
          >
            <img
              loading="lazy"
              src={hasAlarm ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">yes</div>
          </button>
          <button
            className={`flex gap-2 ${!hasAlarm ? "text-sky-600" : "text-zinc-500"}`}
            onClick={() => setHasAlarm(false)}
          >
            <img
              loading="lazy"
              src={!hasAlarm ? "http://b.io/ext_11-" : "http://b.io/ext_13-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="flex gap-4 self-center mt-9 text-base text-center text-white whitespace-nowrap">
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